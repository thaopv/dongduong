;(function() {
	'use strict';

	angular.module('ecommerce').directive('autoFocus', [
		function() {
			return {
				link: function($scope, element, attrs) {
					element.focus();
				},
			};
		},
	]);
})();
