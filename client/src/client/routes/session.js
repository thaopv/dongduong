;(function() {
	'use strict';

	angular.module('ecommerce').config([
		'$routeProvider',
		'/services/template',
		'/resolvers/session',
		function($routeProvider, template, sessionResolver) {
			$routeProvider.when('/login', {
				controller: '/controllers/session/login',
				templateUrl: template('session/login'),
			});
		},
	]);
})();
