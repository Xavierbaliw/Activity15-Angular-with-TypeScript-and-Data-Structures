import { TestBed } from '@angular/core/testing';

import { MealplanListService } from './mealplan-list.service';

describe('MealplanListService', () => {
  let service: MealplanListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealplanListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
