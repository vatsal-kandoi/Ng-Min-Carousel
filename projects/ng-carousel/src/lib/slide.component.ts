import { Component, ViewChildren, OnInit, Directive, ElementRef, Host, OnDestroy } from '@angular/core';
import { NgCarouselComponent } from './ng-carousel.component';

@Directive({
  selector: '[ngSlide]'
})
export class NgSlideDirective implements OnInit, OnDestroy {
  constructor(public el: ElementRef,
    @Host() private carousel: NgCarouselComponent) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
