'use strict';

cartonnApp.controller('RealisationsCtrl', ['$scope', 'Pages', 'Realisations',
	function($scope, Pages, Realisations) {

		Pages.getData(function(data) {
			console.log('data loaded');
			$scope.pages = data;
			$scope.page = data.realisations;
		});

		Realisations.getData(function(data) {
			console.log('realisations loaded');
			$scope.realisations = data;
		});
	}
]);