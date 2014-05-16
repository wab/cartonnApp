'use strict';

cartonnApp.controller('EntrepriseCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
	$http.get('contenu.json').success(function(data) {
			$scope.page = data.entreprise;		
		});
	$scope.slickConfig = {};
	$scope.slickHandle = {};
}]);