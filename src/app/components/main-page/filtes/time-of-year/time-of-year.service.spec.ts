import { TestBed, inject } from '@angular/core/testing';

import { TimeOfYearService } from './time-of-year.service';

describe('TimeOfYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeOfYearService]
    });
  });

  it('should be created', inject([TimeOfYearService], (service: TimeOfYearService) => {
    expect(service).toBeTruthy();
  }));
});
