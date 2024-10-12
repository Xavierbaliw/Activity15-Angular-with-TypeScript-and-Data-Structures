import { TestBed } from '@angular/core/testing';

import { ComputerhardwareListService } from './computerhardware-list.service';

describe('ComputerhardwareListService', () => {
  let service: ComputerhardwareListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerhardwareListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
