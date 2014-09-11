srLazyLoad
==========

It's a simple idea, an angular directive that let's you lazy load images. 

**Requirements:** AngularJS 1.2+

**File Size:** 0.7Kb minified

## Install: 

You can install it via bower

```
$ bower install srLazyLoad
```

## Usage: 

1. Include the module as a dependency for your app
  
  ```js
  angular.module('myApp', ['sinrutina.lazyload'])
  ```

2. As it is now, the directive adds a spinner icon before the img tag, which depends on [Font Awesome Spinner](http://fortawesome.github.io/Font-Awesome/examples/)

3. Add the directive to your image like this
  ```html
  <img sr-lazy-load="url" >
  ```

  Where url is your scope variable that has the referene to the src, internally it will get the value from the scope. 

4. You can add css to better display the spinner

## Credits:
Inspiration taken from [jquery.lazyload](https://github.com/tuupola/jquery_lazyload)

## License:
Licensed under the MIT license