;(function() {
	'use strict';

	angular.module('ecommerce').constant('/resolvers/account', [
		'@lodash',
		'$q',
		'$route',
		'/models/account',
		function(_, Promise, $route, Account) {
			var id = $route.current.params.id;

			if (!id) {
				return new Account();
			}

			return Account.get({
				id: id
			});
		},
	]);
})();
