;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/handle-message', [
		'$translate',
		'/services/message-box',
		'/data/status-code',
		function($translate, Message, statusCode) {
			var self = {};

			self.warning = function(err) {
				var error = err || {};

				if (error.status === statusCode.unauthorized) {
					return Message.warning($translate.instant('MSG401'));
				} else if (error.status === statusCode.notFound) {
					return Message.warning($translate.instant('MSG404'));
				} else if (error.status === statusCode.internalError) {
					return Message.warning($translate.instant('MSG500'));
				} else {
					return Message.warning($translate.instant('MSG400'));
				}
			};

			return self;
		},
	]);
})();
