'use strict';

cartonnApp
.controller('EntrepriseCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('contenu.json').success(function(data) {
			$scope.page = data.entreprise;
		});
	$scope.slickConfig = {

		arrows: false

	};

	$scope.slickHandle = {

	};

	// classe active
    $scope.islideActive = function(slide, scope, element, attrs) {

    var activeSlide = angular.element('.slick-active').attr('data-id');
    $scope.active = activeSlide;
    	
      if (slide.id === activeSlide) {
        return true;
      }
      return false;
    };

}]);