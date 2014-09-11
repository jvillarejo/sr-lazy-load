
angular.module('srLazyLoadExample', ['sinrutina.lazyload']);


angular.module('srLazyLoadExample').controller('ExampleCtrl',function($scope) {
  var imageCount = 40;
  var images = [];

  var randomImage = function(i) { 
    var types = ['cats', 'fashion', 'people', 'food']
    var typeIndex = i % types.length;

    return "http://lorempixel.com/320/240/" + types[typeIndex];
  }

  for(var i=0; i<imageCount; i++) {
    images.push({
      url: randomImage(i)
    });
  }

  $scope.images = images;


});