
angular.module('srLazyLoadExample', ['sinrutina.lazyload']);


angular.module('srLazyLoadExample').controller('ExampleCtrl',function($scope) {
  var imageCount = 20;
  var images = [];

  for(var i=0; i<imageCount; i++) {
    images.push({
      url: 'http://placehold.it/320x240'
    });
  }

  $scope.images = images;


});