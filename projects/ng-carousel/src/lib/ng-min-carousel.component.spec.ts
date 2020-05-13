import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMinCarouselComponent } from './ng-min-carousel.component';
import { Renderer2, RendererFactory2, Type } from '@angular/core';
import { NgMinCarouselService } from './ng-min-carousel.service';

describe('NgMinCarouselComponent', () => {
  let component: NgMinCarouselComponent;
  let fixture: ComponentFixture<NgMinCarouselComponent>;
  let service: NgMinCarouselService;
  let renderer2: Renderer2;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMinCarouselComponent ],
      providers: [NgMinCarouselComponent,NgMinCarouselService, Renderer2]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMinCarouselComponent);
    component = fixture.componentInstance;
    service = fixture.componentRef.injector.get<NgMinCarouselService>(NgMinCarouselService as Type<NgMinCarouselService>);
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
    expect(renderer2).toBeTruthy();
  });
  it('should add a slide', () => {
    let slide = renderer2.createElement('ng-slide');
    component.addSlide(slide);
    expect(component.getSlides().length).toBe(1);
  });

  it('should remove a slide', () => {
    let slide = renderer2.createElement('ng-slide');
    component.addSlide(slide);
    let len = component.getSlides().length;
    component.removeSlide(slide);
    expect(component.getSlides().length).toBe(len-1);
  })

  it('should change the current slide number', () => {
    let slide = renderer2.createElement('ng-slide');
    component.addSlide(slide);
    component.addSlide(slide);
    component.addSlide(slide);
    let current = component.getCurrentSlideNumber();
    component.setCurrentSlideNumber(current + 1);
    expect(component.getCurrentSlideNumber()).toBe(current+1)
  })

  it('should move the carousel right', () => {
    let slide = renderer2.createElement('ng-slide');
    component.addSlide(slide);
    component.addSlide(slide);
    component.addSlide(slide);
    console.log(component.getSlides().length)
    component.setCurrentSlideNumber(0)
    service.right();
    expect(component.getCurrentSlideNumber()).toBe(1);
  });

  it('should move the carousel left', () => {
    let slide = renderer2.createElement('ng-slide');
    component.addSlide(slide);
    component.addSlide(slide);
    component.addSlide(slide);
    component.setCurrentSlideNumber(1);
    service.left();
    expect(component.getCurrentSlideNumber()).toBe(0);
  });
});
