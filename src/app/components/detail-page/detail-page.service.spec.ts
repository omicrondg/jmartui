import { TestBed, inject } from '@angular/core/testing';

import { DetailPageService } from './detail-page.service';

describe('DetailPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailPageService]
    });
  });

  it('should be created', inject([DetailPageService], (service: DetailPageService) => {
    expect(service).toBeTruthy();
  }));
});
