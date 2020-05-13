# NgMinCarousel

A simple and lighweight carousel for Angular projects which provisions only typescript handlers, so the underlying stlying is truly yours.


### Usage ###
To install the package,
```python
npm i ng-min-carousel
```

Before initialising a project, add NgMinCarouselModule to your imports in AppModule.

Adding to your template
```html
<ng-carousel [config]="config" 
    (init)="subscribeInitEvent()"
    (beforeChange)="subscribeBeforeChangeEvent()" 
    (afterChange)="subscribeAfterChangeEvent()">
<ng-slide></ng-slide>
<ng-slide></ng-slide>
<ng-slide></ng-slide>
<ng-slide></ng-slide>
<ng-slide></ng-slide>
</ng-carousel>
```
Add ngSlide to all divs you want to include in the carousel

### Documentation ###

#### Config Options ####
| Attribute | typeof | Significance | Default |
| --- | --- | --- | --- |
| auto | boolean | Auto sliding of carousel | false |
| duration | number | Time interval between auto sliding components | required |
| transitionTime | number | Number of seconds for sliding transition animation | 0.5s |
| useSwiping | boolean | Implement swiping using HammerJS | not enabled |
| slideToSkip | number | Number of slides to skip through | computed based on width |

Important: Add HammerJS to your project for while enabling the useSwiping option.

#### Methods ####
Move the carousel to the right
```js
NgMinCarouselService.right();
```

Move the carousel to the left
```js
NgMinCarouselService.left();
```

Adding a new slide to the carousel
```js
NgMinCarouselComponent.addSlide(el)
```
el is type of NgSlideDirective

Removing a slide from the carousel
```js
NgMinCarouselComponent.removeSlide(el)
```

Seting the slide number
```js
NgMinCarouselComponent.setCurrentSlideNumber(number)
```
where number is the slide number and it starts from 0

Get the current slide number
```js
NgMinCarouselComponent.getCurrentSlideNumber()
```

Resetting the carousel
```js
NgMinCarouselComponent.reset()
```

Updating the slides to skip config variable
```js
NgMinCarouselComponent.updateSlideToSkip(number)
```

#### Binding to events
Events that can be binded to
| Variable name | Significance |
| --- | --- | 
| init| Initialised the carousel |
| beforeChange | Before a change takes place |
| afterChange | After a change takes place |

Event names
| Event name | Significance |
| --- | --- |
| NgMinCarouselInit | Carousel has been initialised |
| NgMinCarouselReset | Reset the carousel |
| NgMinCarouselUpdateSlideNumber | Updating the slide number |
| NgMinCarouselAddSlide | Adding a new slide to the carousel |
| NgMinCarouselRemoveSlide | Removing a slide from the carousel |

#### Binding to observable
Bind to the observable to get the new slide number every time the slide changes
```js
NgMinCarouselComponent.currentSlide.subscribe((val) => {})
```

#### Building the code
```js
ng build my-lib --prod
cd dist/my-lib
npm publish
```