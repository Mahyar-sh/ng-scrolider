import { TestBed } from '@angular/core/testing';

import { NgScroliderService } from './ng-scrolider.service';

describe('NgScroliderService', () => {
  let service: NgScroliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgScroliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
