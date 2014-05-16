'use strict';

cartonnApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenu.json').success(function(data) {
		$scope.page = data;
	});
	$scope.slickConfig = {
			dots: true
    };

    $scope.slickHandle = {

    };
}]);
