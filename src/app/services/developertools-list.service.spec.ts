import { TestBed } from '@angular/core/testing';

import { DevelopertoolsListService } from './developertools-list.service';

describe('DevelopertoolsListService', () => {
  let service: DevelopertoolsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopertoolsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
