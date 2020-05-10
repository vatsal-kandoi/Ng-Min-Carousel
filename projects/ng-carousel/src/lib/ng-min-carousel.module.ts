import { NgModule } from '@angular/core';
import { NgMinCarouselComponent } from './ng-min-carousel.component';
import { NgSlideDirective } from './slide.component';
import { NgMinCarouselService } from './ng-min-carousel.service';

@NgModule({
  declarations: [NgMinCarouselComponent, NgSlideDirective],
  imports: [
  ],
  providers:[
    NgMinCarouselService, NgMinCarouselComponent
  ],
  exports: [NgMinCarouselComponent, NgSlideDirective ]
})
export class NgMinCarouselModule { }
