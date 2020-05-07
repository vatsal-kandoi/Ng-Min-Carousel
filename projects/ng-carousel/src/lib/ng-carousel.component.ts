import { Component, OnInit, Input, Output } from '@angular/core';
import { Config } from './_types/config';
import { EventEmitter } from 'events';

@Component({
  selector: 'lib-ng-carousel',
  template: `
    <p>
      ng-carousel works!
    </p>
  `,
  styles: []
})
export class NgCarouselComponent implements OnInit {
  @Input('config') config: Config;
  @Output('init') init: EventEmitter;
  @Output('beforeChange') beforeChange: EventEmitter;
  @Output('afterChange') afterChange: EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

}
