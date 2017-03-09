;(function() {
	'use strict';

	angular.module('ecommerce', [
		'import',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngCookies',
		'pascalprecht.translate',
	]).config([
		'$routeProvider',
		'/services/template',
		'/resolvers/session',
		function($routeProvider, template, sessionResolver) {
			$routeProvider.when('/', {
				controller: '/controllers/dashboard',
				templateUrl: template('dashboard'),
				// resolve: {
				// 	_session: sessionResolver,
				// },
			}).otherwise({
				redirectTo: '/',
			});
		},
	]).config([
		'$translateProvider',
		function($translateProvider) {
			$translateProvider.useSanitizeValueStrategy('escapeParameters');
		},
	]).config([
		'$httpProvider',
		'/services/interceptor',
		function($httpProvider, intercepter) {
			$httpProvider.interceptors.push(intercepter);
		},
	]).run([
		'$rootScope',
		'$location',
		function($rootScope, $location) {
			$rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
				return $location.url('/');
			});
		},
	]).run([
		'$location',
		'/services/storage',
		'/data/status-code',
		'/data/config',
		function($location, storage, statusCode, setting) {
			// var token = storage.get('session');
			// if (!token) {
			// 	$location.url('/login');
			// }
		},
	]);
})();
