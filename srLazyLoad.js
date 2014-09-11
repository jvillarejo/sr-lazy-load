'use strict';

angular.module('sinrutina.lazyload', ["$window", "$timeout"]);

angular.module('sinrutina.lazyload').directive("srLazyLoad", function ($window, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $timeout(function() { 
        var events = 'DOMContentLoaded load resize scroll';
        var spinner = angular.element('<i class="spinner fa fa-spinner fa-spin"></i>');
        var src = scope.$apply(attrs.srLazyLoad);

        var loaded = function() {
          return element.attr('src') == src;
        };
        
        var loadWhenInView = function() {
          if (element.inViewport() && !loaded()) {        
          
            angular.element($window).unbind(events,loadWhenInView);

            element.parent().prepend(spinner);
            element.attr('src', src);
            
            element.load(function() {
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