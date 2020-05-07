import { TestBed } from '@angular/core/testing';

import { NgCarouselService } from './ng-carousel.service';

describe('NgCarouselService', () => {
  let service: NgCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
