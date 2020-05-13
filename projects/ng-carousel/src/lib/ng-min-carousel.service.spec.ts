import { TestBed } from '@angular/core/testing';

import { NgMinCarouselService } from './ng-min-carousel.service';

describe('NgMinCarouselService', () => {
  let service: NgMinCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgMinCarouselService]
    });
    service = TestBed.inject(NgMinCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return an observable', () => {
    service.moveStatus.subscribe((val) => {
      expect(val).toBeDefined();
      expect(typeof val.direction).toEqual('string');
    })
  })
});
