'use strict';

cartonnApp.controller('ValeursCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
	$http.get('contenu.json').success(function(data) {
			$scope.page = data.valeurs;		
		});
	$scope.slickConfig = {};
	$scope.slickHandle = {};
}]);