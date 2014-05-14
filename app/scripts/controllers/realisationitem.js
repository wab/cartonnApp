'use strict';

cartonnApp.controller('RealisationitemCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $http.get('realisations/' + $routeParams.itemId + '.json').success(function(data) {
			$scope.item = data;
		});
	}]);