'use strict';

angular.element.prototype.inViewport = function() {
  var raw = this[0];
  var rect = raw.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
};

angular.module('sinrutina.lazyload', []);
angular.module('sinrutina.lazyload').directive("srLazyLoad", function ($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var spinner = angular.element('<i class="' + attrs.srSpinnerClass + '"></i>');
      var raw = element[0];
      
      raw.style.opacity = 0;
            
      element.parent().prepend(spinner);

      scope.$watch(attrs.srLazyLoad, function(src) { 
        var events = 'DOMContentLoaded load resize scroll';
        var loaded = function() {
          return element.attr('src') == src;
        };
        
        var loadWhenInView = function() {
          if (element.inViewport() && !loaded()) {        
          
            angular.element($window).unbind(events,loadWhenInView);

            element.attr('src', src);
            
            element.bind('load',function() {
              this.style.opacity = 1;
              
              element.parent().children()[0].remove();
            });
          }
        };

        loadWhenInView();
        angular.element($window).bind(events,loadWhenInView);
      });
    }
  };
});