;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/message-box', [
		'$sce',
		'/services/modal',
		'/services/template',
		function($sce, Modal, template) {
			function showModal(templateUrl, message, unsafe) {
				unsafe = !!unsafe;

				return new Modal({
					templateUrl: templateUrl,
					resolves: {
						message: message,
						unsafe: unsafe,
					},
					controller: function($scope, modalInstance, resolves) {
						$scope.message = ($scope.unsafe = unsafe) ?
								$sce.trustAsHtml(message) : message;

						$scope.accept = function() {
							modalInstance.close();
						};

						$scope.cancel = function() {
							modalInstance.dismiss();
						};
					},
				}).open();
			}

			return {
				confirm: function(message, unsafe) {
					return showModal(template('modals/message-box/confirm'), message, unsafe);
				},
				warning: function(message, unsafe) {
					return showModal(template('modals/message-box/warning'), message, unsafe);
				},
				info: function(message, unsafe) {
					return showModal(template('modals/message-box/info'), message, unsafe);
				},
			};
		},
	]);
})();
