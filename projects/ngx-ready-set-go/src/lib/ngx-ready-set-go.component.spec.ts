import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReadySetGoComponent } from './ngx-ready-set-go.component';

describe('NgxReadySetGoComponent', () => {
  let component: NgxReadySetGoComponent;
  let fixture: ComponentFixture<NgxReadySetGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxReadySetGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxReadySetGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
