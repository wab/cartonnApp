'use strict';

cartonnApp
.controller('ClientsCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenus/pages.json').success(function(data) {
			$scope.page = data.clients;
			$scope.videos = data.clients.videos;
			$scope.mainVideoFile = data.clients.videos[1].file;
		});
	$scope.slickConfig = {

		arrows: false

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