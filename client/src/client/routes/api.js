;(function() {
	'use strict';

	angular.module('ecommerce').config([
		'$routeProvider',
		'/services/template',
		'/resolvers/session',
		'/resolvers/api/api-generate',
		'/resolvers/api/api-service',
		function($routeProvider, template, sessionResolver, apiGenerateResolver, apiServiceResolver) {
			$routeProvider.when('/api', {
				controller: '/controllers/apis/list',
				templateUrl: template('apis/list'),
				resolve: {
					_session: sessionResolver
				},
			})
			.when('/apis/create', {
				controller: '/controllers/apis/create',
				templateUrl: template('apis/create'),
				resolve: {
					_session: sessionResolver,
					_generate: apiGenerateResolver,
				},
			})
			.when('/apis/update/:id', {
				controller: '/controllers/apis/update',
				templateUrl: template('apis/update'),
				resolve: {
					_session: sessionResolver,
					_service: apiServiceResolver,
				},
			});
		},
	]);
})();
