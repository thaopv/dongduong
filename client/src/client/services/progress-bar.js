;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/progress-bar', [
		'$timeout',
		'/services/modal',
		'/services/template',
		function($timeout, ModalLoader, template) {
			var model;

			return {
				show: function() {
					if (model) {
						return;
					}

					model = new ModalLoader({
						templateUrl: template('modals/progress-bar'),
						defaults: {
							overlayClass: 'modal-overlay',
							// cssClass: 'modal--progress-bar',
						},
					});

					return model.open();
				},
				hide: function() {
					if (!model) {
						return;
					}

					model.close();

					model = undefined;
				},
			};
		},
	]);
})();
