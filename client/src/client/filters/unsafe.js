;(function() {
	'use strict';

	angular.module('ecommerce').filter('unsafe', [
		'$sce',
		function($sce) {
			return function(input) {
				return input ? $sce.trustAsHtml(input) : '';
			};
		},
	]);
})();
