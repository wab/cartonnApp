'use strict';

cartonnApp.controller('EntrepriseCtrl', ['$scope', 'Pages' , 
	function ($scope, Pages) {
		Pages.getData(function(data) {
			console.log('data loaded');
			$scope.page = data.entreprise;
		});
	
	$scope.slickConfig = {
		arrows: false
	};

	$scope.slickHandle = {

	};

	$scope.bgImg = "background-image: url(../images/entreprise/chiffres-cles/slide-all.png);";
	$scope.bgLoad = function(img, event) {
		$scope.bgImg = "background-image: url('" + img + "');" ;
		removeClass('btnActive');
		 $(event.target).addClass('btnActive');
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