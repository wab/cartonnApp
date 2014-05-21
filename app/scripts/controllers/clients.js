'use strict';

cartonnApp.controller('ClientsCtrl', ['$scope', 'Pages', 
	function ($scope, Pages) {
		Pages.getData(function(data) {
			console.log('data loaded');
			$scope.page = data.clients;
		});

	$scope.slickConfig = {

		arrows: false,
		dots: true

	};

	$scope.slickHandle = {

	};

	// load video on click
	$scope.loadvideo = function(videoFile) {
		$scope.mainVideoFile = videoFile;
	}

	
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