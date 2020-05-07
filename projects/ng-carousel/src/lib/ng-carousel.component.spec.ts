import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCarouselComponent } from './ng-carousel.component';

describe('NgCarouselComponent', () => {
  let component: NgCarouselComponent;
  let fixture: ComponentFixture<NgCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
