;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/api', [
		'/data/config',
		function(config) {
			return function(api) {
				return config.api.rootPath + api;
			};
		},
	]);
})();
