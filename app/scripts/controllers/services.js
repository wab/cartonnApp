'use strict';

cartonnApp.controller('ServicesCtrl', ['$scope', 'Pages', 'ngDialog' ,
	function($scope, Pages, ngDialog) {

		Pages.getData(function(data) {
			console.log('data loaded');
			$scope.page = data.services;
		});

		$scope.slickConfig = {

			arrows: false

		};

		$scope.slickHandle = {

		};

		$scope.clickToOpen = function(video) {
	      var video = '<video width="640" height="480" controls="controls" autoplay="true" src="' + video + '" class="img-responsive" type="video/mp4"></video>';
	      ngDialog.open({
	        template: video,
	        plain: true
	      });
    };

		// classe active
		$scope.islideActive = function(slide, scope, element, attrs) {

			var activeSlide = angular.element('.slick-active').attr('data-id');

			if (slide.id === activeSlide) {
				return true;
			}
			return false;
		};

	}
]);