;(function() {
	'use strict';

	angular.module('ecommerce').config([
		'$routeProvider',
		'/services/template',
		'/resolvers/session',
		'/resolvers/sil-service',
		function($routeProvider, template, sessionResolver, silServiceResolver) {
			$routeProvider.when('/services', {
				controller: '/controllers/services/list',
				templateUrl: template('services/list'),
				resolve: {
					_session: sessionResolver,
				},
			}).when('/services/update/:id', {
				controller: '/controllers/services/save',
				templateUrl: template('services/save'),
				resolve: {
					_session: sessionResolver,
					_service: silServiceResolver,
				},
			}).when('/services/create', {
				controller: '/controllers/services/create',
				templateUrl: template('services/create'),
				resolve: {
					_session: sessionResolver,
					_service: silServiceResolver,
				},
			}).when('/services/:id/detail', {
				controller: '/controllers/services/detail',
				templateUrl: template('services/detail'),
				resolve: {
					_session: sessionResolver,
					_service: silServiceResolver,
				},
			});
		},
	]);
})();
