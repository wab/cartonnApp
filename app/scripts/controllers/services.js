'use strict';

cartonnApp
.controller('ServicesCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenus/pages.json').success(function(data) {
			$scope.page = data.services;
		});
	$scope.slickConfig = {

		arrows: false

	};

	$scope.slickHandle = {

	};

	// classe active
    $scope.islideActive = function(slide, scope, element, attrs) {

    var activeSlide = angular.element('.slick-active').attr('data-id');
    $scope.active = activeSlide;
    	
      if (slide.id === activeSlide) {
        return true;
      }
      return false;
    };

}]);