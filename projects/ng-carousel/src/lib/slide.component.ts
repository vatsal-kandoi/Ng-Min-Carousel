import { OnInit, Directive, ElementRef, Host, OnDestroy } from '@angular/core';

@Directive({
  selector: 'ng-slide'
})
export class NgSlideDirective implements OnInit, OnDestroy {
  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
