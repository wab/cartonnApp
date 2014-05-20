'use strict';

cartonnApp
.controller('RealisationCategoryCtrl', ['$scope', '$http', '$routeParams',  function ($scope, $http, $routeParams) {

	$http.get('contenus/realisations.json').success(function(data) {
			$scope.realisations = data;
	
		});


}]);