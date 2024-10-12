import { TestBed } from '@angular/core/testing';

import { MusicplayListService } from './musicplay-list.service';

describe('MusicplayListService', () => {
  let service: MusicplayListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicplayListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
