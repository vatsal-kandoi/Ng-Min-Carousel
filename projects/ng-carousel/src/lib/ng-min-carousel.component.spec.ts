import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMinCarouselComponent } from './ng-min-carousel.component';

describe('NgMinCarouselComponent', () => {
  let component: NgMinCarouselComponent;
  let fixture: ComponentFixture<NgMinCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMinCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMinCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
