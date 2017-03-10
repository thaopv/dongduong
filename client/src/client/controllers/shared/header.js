;(function() {
	'use strict';

	angular.module('ecommerce').controller('/controllers/shared/header', [
		'$scope',
		'$location',
		'$translate',
		'/services/storage',
		'/services/event-hub',
		'/services/dispose',
		function($scope, $location, $translate, EventHub, dispose) {

		},
	]);
})();
