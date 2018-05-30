import { TestBed, inject } from '@angular/core/testing';

import { TimeFrameService } from './time-frame.service';

describe('TimeFrameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeFrameService]
    });
  });

  it('should be created', inject([TimeFrameService], (service: TimeFrameService) => {
    expect(service).toBeTruthy();
  }));
});
