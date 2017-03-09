;(function() {
	'use strict';

	angular.module('ecommerce').constant('/resolvers/session', [
		'$q',
		'/services/storage',
		function(Promise, storage) {
			var session = storage.get('session');
			if (!session) {
				return Promise.reject();
			}

			return session;
		},
	]);
})();
