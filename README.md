sr-lazy-load
==========

It's a simple idea, an angular directive that let's you lazy load images. 

**Requirements:** AngularJS 1.2+

**File Size:** 1.1Kb minified

## Install: 

You can install it via bower

```
$ bower install sr-lazy-load
```

## Usage: 

1. Include the module as a dependency for your app
  
  ```js
  angular.module('myApp', ['sinrutina.lazyload'])
  ```

2. Add the directive to your image like this
  ```html
  <img sr-lazy-load="url" sr-spinner-class="spinner fa fa-spinner fa-spin">
  ```

  Where url is your scope variable that has the referene to the src, internally it will get the value from the scope. 

3. The directive also adds an icon tag before the img tag in order to display a loading spinner, you can configure it's classes with sr-spinner-class

## Credits:
Inspiration taken from [jquery.lazyload](https://github.com/tuupola/jquery_lazyload)

## License:
Licensed under the MIT license