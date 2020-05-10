import { NgModule } from '@angular/core';
import { NgCarouselComponent } from './ng-carousel.component';
import { NgSlideDirective } from './slide.component';
import { NgCarouselService } from './ng-carousel.service';

@NgModule({
  declarations: [NgCarouselComponent, NgSlideDirective],
  imports: [
  ],
  providers:[
    NgCarouselService, NgCarouselComponent
  ],
  exports: [NgCarouselComponent, NgSlideDirective ]
})
export class NgCarouselModule { }
