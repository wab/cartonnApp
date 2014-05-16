'use strict';

cartonnApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenus/accueil.json').success(function(data) {
		$scope.accueil = data;
		$scope.slickConfig = {
			dots: true
    };

    $scope.slickHandle = {

    };
	});
}]);
