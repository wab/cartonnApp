'use strict';

angular.module('cartonnApp')

.controller('RealisationsCtrl',	function ($scope, $http) {
	$http.get('realisations/realisations.json').success(function(data) {
    	$scope.realisations = data;
  	});
		
 });