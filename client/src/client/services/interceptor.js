;(function() {
	'use strict';

	angular.module('ecommerce').constant('/services/interceptor', [
		'$location',
		'$q',
		'/services/storage',
		'/data/config',
		'/data/status-code',
		function($location, Promise, storage, setting, statusCode) {
			return {
				request: function(config) {
					var session = storage.get('session');

					if (session) {
						config.headers[setting.header.authorization] = session.token;
					}

					return config;
				},
				responseError: function(rejection) {
					if (rejection && rejection.status === statusCode.unauthorized) {
						$location.url('/login');
					}

					return Promise.reject(rejection);
				},
			};
		},
	]);
})();
