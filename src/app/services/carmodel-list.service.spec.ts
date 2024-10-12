import { TestBed } from '@angular/core/testing';

import { CarmodelListService } from './carmodel-list.service';

describe('CarmodelListService', () => {
  let service: CarmodelListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmodelListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
