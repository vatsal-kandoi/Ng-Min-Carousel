import { TestBed } from '@angular/core/testing';

import { NgMinCarouselService } from './ng-min-carousel.service';

describe('NgMinCarouselService', () => {
  let service: NgMinCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMinCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
