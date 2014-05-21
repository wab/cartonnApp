'use strict';

cartonnApp.controller('MainCtrl', ['$scope', 'Pages', 
	function ($scope, Pages) {
		Pages.getData(function(data) {
			console.log('data loaded');
			$scope.pages = data;
			$scope.accueil = data.accueil;
		});
	$scope.slickConfig = {
			dots: false,
			arrows: true
    };

    $scope.slickHandle = {

    };

    $scope.slickConfigtemoignage = {
			dots: true,
			arrows: false,
			fade: true
    };
}]);
