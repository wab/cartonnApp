'use strict';

cartonnApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenus/pages.json').success(function(data) {
		$scope.pages = data;
		$scope.accueil = data.accueil;
	});
	$scope.slickConfig = {
			dots: false,
			arrows: true
    };

    $scope.slickHandle = {

    };
    $scope.slickConfig2 = {
			dots: true,
			arrows: false,
			fade: true,
    };

    $scope.slickHandle = {

    };
}]);
