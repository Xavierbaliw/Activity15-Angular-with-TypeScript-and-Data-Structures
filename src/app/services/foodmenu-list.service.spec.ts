import { TestBed } from '@angular/core/testing';

import { FoodmenuListService } from './foodmenu-list.service';

describe('FoodmenuListService', () => {
  let service: FoodmenuListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodmenuListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
