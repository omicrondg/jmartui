import { TestBed, inject } from '@angular/core/testing';

import { ProgramOpenToService } from './program-open-to.service';

describe('ProgramOpenToService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramOpenToService]
    });
  });

  it('should be created', inject([ProgramOpenToService], (service: ProgramOpenToService) => {
    expect(service).toBeTruthy();
  }));
});
