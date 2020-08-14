import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxReadySetGoService {

  constructor(private httpClient: HttpClient) {
  }

  getUsersFromAPI(): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/1`).pipe(map((response: any) => {
      return response;
    }));
  }
}
