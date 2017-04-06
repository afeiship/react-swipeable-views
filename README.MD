# react-swipeable-views
> Abstract swipeable views for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript
{
  unit:PropTypes.string,
  animate:PropTypes.string,
  duration:PropTypes.number,
  items:PropTypes.array,
  itemTemplate:PropTypes.func,
  activeIndex:PropTypes.number,
  onNext:PropTypes.func,
  onPrev:PropTypes.func,
  onChange:PropTypes.func,
}
```

## usage:
```javascript
import ReactSwipeableViews from 'react-swipeable-views';

class xxSwiper extends ReactSwipeableViews{
  toIndex(){
    //to be implement
  }

  updateIndex(){
    //to be implement
  }
}
```
