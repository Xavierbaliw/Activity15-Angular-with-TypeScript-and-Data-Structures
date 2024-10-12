import { TestBed } from '@angular/core/testing';

import { LaptopspecificationListService } from './laptopspecification-list.service';

describe('LaptopspecificationListService', () => {
  let service: LaptopspecificationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopspecificationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
