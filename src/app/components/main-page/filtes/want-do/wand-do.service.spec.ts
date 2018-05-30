import { TestBed, inject } from '@angular/core/testing';

import { WandDoService } from './wand-do.service';

describe('WandDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WandDoService]
    });
  });

  it('should be created', inject([WandDoService], (service: WandDoService) => {
    expect(service).toBeTruthy();
  }));
});
