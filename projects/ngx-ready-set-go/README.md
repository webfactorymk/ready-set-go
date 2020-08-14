# ngx-ready-set-go

This library will help you indicate (track) the progress of you requests. 
When they are preparing, executing or if there is an error. 

Its purpose is to be attached to any observable by providing IndicatorBehavioralSubject to it.

## How to install

Add it to you project by executing the following:

`npm i ngx-ready-set-go --save`

## Use it in action

TS

```typescript

indicator: IndicatorBehaviorSubject = new IndicatorBehaviorSubject();

this.readySetGoService.getUsersFromAPI()
.pipe(indicate(this.indicator))
.subscribe((res: any) => {
  console.log(res);
});

```

HTML

```angular2html

<div *ngIf="indicator | async as status">
   <span>Loading: {{status.loading}}</span>
   <span>Error: {{status.error}}</span>
   <span>Loaded: {{status.loaded}}</span>
</div>

```

## States

It has 3 states for now:
     ```error: false, loaded: false, loading: false```

They are all false on init.

- On prepare: ``loading becomes true, all others false``
- On catchError: ``error becomes true, all others false``
- On finalize: ``loaded becomes true, all others false``


## Furture updates

I would be happy to get your feedback and suggestions
