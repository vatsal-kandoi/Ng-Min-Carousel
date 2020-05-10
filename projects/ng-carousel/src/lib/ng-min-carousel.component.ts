import { Component, OnInit, Input, Output, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Config } from './_types/config';
import { EventEmitter } from 'events';
import { NgSlideDirective } from './slide.component';
import { NgMinCarouselService } from './ng-min-carousel.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'ng-carousel',
  template: `
    <div class="wrap">
      <div #carousel class="carousel-enc"> 
        <ng-content select="[ngSlide]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `.carousel-enc{
      display:flex;
      transition:all 0.5s ease-out;
      -ms-flex-direction: row;
      flex-direction: row;
      justify-content: flex-start;
    }
    .wrap{
      overflow-x:hidden;
      margin: 50px;
    }
    `
  ]
})
export class NgMinCarouselComponent implements OnInit,AfterViewInit {
  /** Component bindings */
  @Input('config') config: Config;
  @Output('init') init: EventEmitter;
  @Output('beforeChange') beforeChange: EventEmitter;
  @Output('afterChange') afterChange: EventEmitter;


  @ViewChild("carousel") private carousel: ElementRef;
  

  /** Mouse event bindings */
  @HostListener('mouseenter', ['$event']) mouseover(event :Event)
  {
    if (this.config.auto && this.initialized) {
      this.pauseAutoMode()
    }    
  }
  @HostListener('mouseleave', ['$event']) mouseleave(event: Event)
  {
    if (this.config.auto && this.initialized) {
      setTimeout(() => {
        this.setAutoMode();
      }, this.config.duration);
    }
  }

  @HostListener('swipeleft', ['$event']) swipeLeft (event: Event) {
    if (this.config.useSwiping) this.left();
  }
  @HostListener('swiperight', ['$event']) swipeRight (event: Event) {
    if (this.config.useSwiping) this.right();
  }
  


  /** Interval for autoScroll */
  private autoCarousel: any;  

  private _slides: NgSlideDirective[] = [];

  /**
   * Carousel variables
   */
  private initialized = false;
  private leftTransform = 0;
  private current = 0;

  /** Subscribe for each new slide number */
  public currentSlide: Subject<number>;


  constructor(private caroselService: NgMinCarouselService ) {
  }
  ngOnInit(): void {
    this.currentSlide = new Subject<number>();
    this.beforeChange = new EventEmitter();
    this.afterChange = new EventEmitter();
    this.init = new EventEmitter();
    if (this.config.auto != undefined && (this.config.duration == undefined || typeof this.config.duration != "number")) {
      throw new Error("Please define duration for auto-sliding windows")
    }
  }

  ngAfterViewInit() {
    this.caroselService.moveStatus.subscribe((val) => {
      if (val.direction == 'left') {
        this.left()
      }
      else if (val.direction == 'right') {
        this.right();
      }
    })
    this.initialized = true;
    this.init.emit("NgMinCarouselInit");
    if (this.config.transitionTime != undefined && typeof this.config.transitionTime == "number") {
      this.carousel.nativeElement.style.transitionDuration = `${this.config.transitionTime}s`      
    }
    if (this.config.auto == true) {
      this.setAutoMode();
    }
    this._slides = this.carousel.nativeElement.childNodes;
  }

  
  
  /**
   * Get and set slide number
   */
  public getCurrentSlideNumber(): number {
    return this.current;
  }

  public setCurrentSlideNumber(num: number) {
    this.beforeChange.emit('NgMinCarouselUpdateSlideNumber')
    this.current = num;
    this.afterChange.emit('NgMinCarouselUpdateSlideNumber');
  }

  /** 
   * Add and removing slides from the carousel
   */
  public addSlide(slide: NgSlideDirective): void {
    this.beforeChange.emit('NgMinCarouselAddSlide');
    this.carousel.nativeElement.appendChild(slide);
    this._slides.push(slide);
    this.afterChange.emit('NgMinCarouselAddSlide');
  }

  public removeSlide(slide: NgSlideDirective): void {
    this.beforeChange.emit('NgMinCarouselRemoveSlide');
    this.carousel.nativeElement.removeChild(this.carousel.nativeElement.childNodes[this._slides.indexOf(slide)]);
    this._slides = this._slides.filter((val) => { val != slide });
    this.afterChange.emit('NgMinCarouselRemoveSlide');
  }
  
  public reset() {
    this.beforeChange.emit('NgMinCarouselReset')
    this.resetCarousel();
    this.afterChange.emit('NgMinCarouselReset');
  }

  public updateSlideToSkip(num: number) {
    if (this.config != undefined) {
      if (this.config.slideToSkip != undefined) {
        this.config.slideToSkip = num;
      }  
    }
  }

  /** 
   * Private functions
   */

  /**
   * Initialising autoscroll and pausing it
   */
  private setAutoMode() {
    this.autoCarousel = setInterval(() => {
      if (this.current == this.carousel.nativeElement.childNodes.length-1) {
        this.resetCarousel();
      } else {
        this.right();
      }
    }, this.config.duration);
  }
  private pauseAutoMode() {
    clearInterval(this.autoCarousel);
  }


  /**
   * Reset the carousel
   */
  private resetCarousel() {
    this.leftTransform = 0;
    this.carousel.nativeElement.style.transform = `translateX(-${this.leftTransform}px)`;
    this.current = 0;
  }
  

  /**
   * Left and right movements of slides
   */
  private left() {
    if (!this.initialized) return;
    if (this.current == 0) return;
    this.beforeChange.emit('NgMinCarouselSlideLeft');
    console.log(this.current)
    for (let i = 1; i<=(this.config.slideToSkip || 1) && this.current-1>=0; i++) {
      this.leftTransform -= this.carousel.nativeElement.childNodes[this.current - 1].offsetWidth + parseInt(this.carousel.nativeElement.childNodes[this.current - 1].style.marginLeft.split("px")[0]) * 2;
      this.current--;
    }
    this.carousel.nativeElement.style.transform = `translateX(-${this.leftTransform}px)`;
    this.afterChange.emit('NgMinCarouselSlideLeft');
    this.currentSlide.next(this.current);
  }
  private right() {
    if (!this.initialized) return;
    if (this.current == this.carousel.nativeElement.childNodes.length-1) return;
    this.beforeChange.emit('NgMinCarouselSlideRight');
    console.log(this.current)

    for (let i = 1; i<=(this.config.slideToSkip || 1) && this.current+1<this.carousel.nativeElement.childNodes.length; i++) {
      this.leftTransform += this.carousel.nativeElement.childNodes[this.current + 1].offsetWidth + parseInt(this.carousel.nativeElement.childNodes[this.current + 1].style.marginLeft.split("px")[0]) * 2;
      this.current++;
    }
    this.carousel.nativeElement.style.transform = `translateX(-${this.leftTransform}px)`;
    this.afterChange.emit('NgMinCarouselSlideRight');
    this.currentSlide.next(this.current);
  }
}
