'use strict';

cartonnApp.controller('RealisationitemCtrl', ['$scope', 'Realisations', '$routeParams', '$location', function ($scope, Realisations, $routeParams, $location) {

	Realisations.getData(function(data) {
		console.log('realisations loaded');
		$scope.realisations = data;
	});

	$scope.catid = $routeParams.categorId;
	$scope.itemid = $routeParams.itemId;

	$scope.slickConfig = {

		dots: true

	};

	$scope.slickHandle = {

	};

	// classe active
    $scope.ispageActive = function(page, element, attrs) {

    var activePage = angular.element('.page').attr('data-page');

      if (page.id === activePage) {
        return true;
      }
      return false;
    };

}]);