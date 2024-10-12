import { TestBed } from '@angular/core/testing';

import { SportListService } from './sport-list.service';

describe('SportListService', () => {
  let service: SportListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
