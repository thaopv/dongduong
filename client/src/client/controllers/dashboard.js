;(function() {
	'use strict';

	angular.module('ecommerce').controller('/controllers/dashboard', [
		'$scope',
		'@particles',
		function($scope, particles) {
			function active() {
				particles.load('particles-js', '/particles/config.json');
			}

			active();
		},
	]);
})();
