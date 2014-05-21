'use strict';

cartonnApp.controller('RealisationCategoryCtrl', ['$scope', 'Realisations', '$routeParams', '$location', function ($scope, Realisations, $routeParams, $location) {

	Realisations.getData(function(data) {
		console.log('realisations loaded');
		$scope.realisations = data;
	});

	$scope.catid = $routeParams.categorId;

	// classe active
    $scope.isActiveCategory = function(category) {

	      if (category.id === $routeParams.categorId) {
	        return true;
	      }
	      return false;
    };

    // classe active
    $scope.clickCategory = function(category) {
    	
    	var url = "realisations/" + category.id;
    	$location.path(url);
    };

}]);