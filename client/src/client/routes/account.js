;(function() {
	'use strict';

	angular.module('ecommerce').config([
		'$routeProvider',
		'/services/template',
		'/resolvers/session',
		'/resolvers/account',
		function($routeProvider, template, sessionResolver, accountResolver) {
			$routeProvider.when('/account', {
				controller: '/controllers/account/list',
				templateUrl: template('account/list'),
				resolve: {
					_session: sessionResolver,
				},
			}).when('/account/create', {
				controller: '/controllers/account/create',
				templateUrl: template('account/create'),
				resolve: {
					_session: sessionResolver,
					_account: accountResolver,
				},
			}).when('/account/update/:id', {
				controller: '/controllers/account/update',
				templateUrl: template('account/update'),
				resolve: {
					_session: sessionResolver,
					_account: accountResolver,
				},
			}).when('/account/register', {
				controller: '/controllers/account/register',
				templateUrl: template('account/register'),
				resolve: {
					_account: accountResolver,
				},
			});
		},
	]);
})();
