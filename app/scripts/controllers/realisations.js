'use strict';

cartonnApp.controller('RealisationsCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenus/realisations.json').success(function(data) {
		$scope.realisations = data;
	});
}]);
