'use strict';

cartonnApp
.controller('OutilCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenus/pages.json').success(function(data) {
			$scope.page = data.outil;
		});

}]);