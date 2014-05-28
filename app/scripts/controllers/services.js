'use strict';

cartonnApp.controller('ServicesCtrl', ['$scope', 'Pages',
	function($scope, Pages) {

		Pages.getData(function(data) {
			console.log('data loaded');
			$scope.page = data.services;
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

	}
]);