'use strict';

cartonnApp.controller('RealisationsCtrl', ['$scope', 'Pages', 'Realisations', 
	function ($scope, Pages, Realisations) {
	
	Pages.getData(function(data) {
		console.log('data loaded');
		$scope.pages = data;
		$scope.page = data.realisations;
	});

	Realisations.getData(function(data) {
		console.log('realisations loaded');
		$scope.realisations = data;
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