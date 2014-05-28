'use strict';

cartonnApp
	.controller('OutilCtrl', ['$scope', 'Pages',
		function($scope, Pages) {
			Pages.getData(function(data) {
				console.log('data loaded');
				$scope.page = data.outil;
			});
		}
	]);