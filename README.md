# NgCarousel

A simple and lighweight carousel for Angular projects which provisions only typescript handlers, so the underlying stlying is truly yours.


### Usage ###
To install the package,
```python
npm i ng-carousel
```

Before initialising a project, add NgCarouselModule to your imports in AppModule.

### Documentation ###

#### Config Options ####
| Attribute | typeof | Significance | Default |
| --- | --- | --- | --- |
| auto | boolean | Auto sliding of carousel | false |
| duration | number | Time interval between auto sliding components | required |
| transitionTime | number | Number of seconds for sliding transition animation | 0.5s |
| useSwiping | boolean | Implement swiping using HammerJS |

#### Methods ####
Move the carousel to the right
```js
    NgCarouselService.right();
```

Move the carousel to the left
```js
    NgCarouselService.left();
```

Adding a new slide to the carousel
```js
    NgCarouselComponent.addSlide(el)
```
el is type of NgSlideDirective

Removing a slide from the carousel
```js
    NgCarouselComponent.removeSlide(el)
```

Seting the slide number
```js
    NgCarouselComponent.setCurrentSlideNumber(number)
```
where number is the slide number and it starts from 0

Get the current slide number
```js
    NgCarouselComponent.getCurrentSlideNumber()
```

Resetting the carousel
```js
    NgCarouselComponent.reset()
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
| NgCarouselInit | Carousel has been initialised |
| NgCarouselReset | Reset the carousel |
| NgCarouselUpdateSlideNumber | Updating the slide number |
| NgCarouselAddSlide | Adding a new slide to the carousel |
| NgCarouselRemoveSlide | Removing a slide from the carousel |

#### Binding to observable
Bind to the observable to get the new slide number every time the slide changes
```js
    NgCarouselComponent.currentSlide.subscribe((val) => {})
```