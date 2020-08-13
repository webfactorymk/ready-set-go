import { TestBed } from '@angular/core/testing';

import { NgxReadySetGoService } from './ngx-ready-set-go.service';

describe('NgxReadySetGoService', () => {
  let service: NgxReadySetGoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReadySetGoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
