import {Component, OnInit} from '@angular/core';
import {indicate, IndicatorBehaviorSubject} from './ngx-ready-set-go';
import {NgxReadySetGoService} from './ngx-ready-set-go.service';

@Component({
  selector: 'lib-ngx-ready-set-go',
  template: `
    <div *ngIf="indicator | async as status">
      <span>Loading: {{status.loading}}</span>
      <span>Error: {{status.error}}</span>
      <span>Loaded: {{status.loaded}}</span>
    </div>
  `,
  styles: []
})
export class NgxReadySetGoComponent implements OnInit {

  indicator: IndicatorBehaviorSubject = new IndicatorBehaviorSubject();

  constructor(private readySetGoService: NgxReadySetGoService) {
  }

  ngOnInit(): void {
    this.readySetGoService.testRequest().pipe(indicate(this.indicator)).subscribe((res: any) => {
      console.log(res);
    });
  }
}
