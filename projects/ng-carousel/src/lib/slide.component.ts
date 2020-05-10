import { OnInit, Directive, ElementRef, Host, OnDestroy } from '@angular/core';

@Directive({
  selector: '[ngSlide]'
})
export class NgSlideDirective implements OnInit, OnDestroy {
  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
