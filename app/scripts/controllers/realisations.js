'use strict';

cartonnApp
.controller('RealisationsCtrl', ['$scope', 'Pages', 
	function ($scope, Pages) {
	
	Pages.getData(function(data) {
		console.log('data loaded');
		$scope.page = data.realisations;
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