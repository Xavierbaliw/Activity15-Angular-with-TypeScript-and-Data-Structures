import { TestBed } from '@angular/core/testing';

import { MobileappListService } from './mobileapp-list.service';

describe('MobileappListService', () => {
  let service: MobileappListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileappListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
