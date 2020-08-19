import {BehaviorSubject, defer, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * Statuses for the indicator
 * {boolean} loaded, represents if the observable(requests) has been loaded
 * {boolean} error, represents if the observable(requests) has an error
 * {boolean} loading, represents if the observable(requests) is in loading process (execution)
 */
interface IndicatorStatus {
  loaded: boolean;
  error: boolean;
  loading: boolean;
}

/**
 * Indicator status subject. Follows and registers the state for the subscriber
 */
export class IndicatorBehaviorSubject extends BehaviorSubject<IndicatorStatus> {
  constructor() {
    const indicatorStatus: IndicatorStatus = {
      error: false,
      loaded: false,
      loading: false
    };
    super(indicatorStatus);
  }

}

/**
 * Allows you to create the Observable only when the Observer subscribes, and create a fresh Observable for each Observer
 */
function prepare<T>(callback: () => void): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> => defer(() => {
    callback();
    return source;
  });
}

/**
 * Registers all 3 states of the indicator. Start/Progress, finish and error
 */
export function indicate<T>(indicator: IndicatorBehaviorSubject): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> => source.pipe(
    prepare(() => {
      indicator.next({error: false, loaded: false, loading: true});
    }),
    tap({
      next: (x) => {
        indicator.next({error: false, loaded: false, loading: true});
      },
      error: (err) => {
        indicator.next({error: true, loaded: false, loading: false});
      },
      complete: () => indicator.next({error: false, loaded: true, loading: false})
    })
  );
}

