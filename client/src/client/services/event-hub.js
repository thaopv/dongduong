;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/event-hub', [
		'/services/event-emitter',
		function(EventEmitter) {
			return new EventEmitter();
		},
	]);
})();
