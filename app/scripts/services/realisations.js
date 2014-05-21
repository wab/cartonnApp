'use strict';

cartonnApp.factory('Realisations', ['$http', 
	function ($http) {
		return {
			getData: function(callback) {
				$http.get('contenus/realisations.json').success(callback);
			}
		}
  }]);