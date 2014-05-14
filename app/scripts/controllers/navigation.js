'use strict';

angular.module('cartonnApp')
  .controller('NavigationCtrl', function ($scope) {
    $scope.title = 'test';
  })
  .directive('trackActive', function($location) {
    function link(scope, element, attrs){
        scope.$watch(function() {
            return $location.path();
        }, function(){
            var links = element.find('a');
            links.parent().removeClass('active');
            angular.forEach(links, function(value){
                var a = angular.element(value);
                if (a.attr('href') == '#' + $location.path() ){
                    a.parent().addClass('active');
                }
            });
        });
    }
    return {link: link};
});
