'use strict';

cartonnApp.factory('Pages', ['$http', 
	function ($http) {
		return {
			getData: function(callback) {
				$http.get('contenus/pages.json').success(callback);
			}
		}
  }]);
