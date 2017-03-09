;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/modal', [
		'@lodash',
		'$templateRequest',
		'$compile',
		'$rootScope',
		'$templateCache',
		'$timeout',
		'$q',
		'/services/template',
		function(_, $templateRequest, $compile, $rootScope, $templateCache, $timeout, Promise, template) {
			// load html content
			var loadFile = function(url) {
				var layout = $templateCache.get(url);

				if (layout) {
					return Promise.when(layout);
				}

				return $templateRequest(url).then(function loadSuccess(data) {
					// put data to cache
					$templateCache.put(url, data);
					return data;
				});
			};

			var Modal = function(options) {
				this.options = _.pick(options, 'templateUrl', 'controller', 'resolves', 'scope', 'defaults');
			};

			// open modal
			Modal.prototype.open = function() {
				if (this.deferred) {
					return this.deferred.promise;
				}

				var self = this;
				var options = self.options;

				self._id = new Date().getTime();

				var layout;

				return loadFile(template('modals/layout')).then(function loadLayoutSuccess(layoutData) {
					layout = layoutData;

					return loadFile(options.templateUrl);
				}).then(function loadTemplateSuccess(templateData) {
					return templateData;
				}).then(function openModal(templateData) {
					var content = layout.replace('[[CONTENT]]', templateData);

					self.modalScope = options.scope ? options.scope.$new() : $rootScope.$new();

					self.modalScope._defaults = _.pick(options.defaults, 'cssClass');

					$compile(content)(self.modalScope, function(compiledNodes) {
						self.appear(self.modalScope, compiledNodes);
					});

					self.deferred = Promise.defer();

					self.deferred.promise.finally(function() {
						self.disappear();
						self.modalScope.$destroy();
					});

					return self.deferred.promise;
				});
			};

			Modal.prototype.appear = function(scope, compiledNodes) {
				var self = this;

				self.overlay = angular.element(compiledNodes[0]);

				// set z-index & append to document
				angular.element(document.body).append(compiledNodes.css('z-index', self._id));

				// call controller
				if (self.options.controller) {
					$timeout(function() {
						self.options.controller(scope, self, self.options.resolves);
					});
				}
			};

			Modal.prototype.disappear = function() {
				this.overlay.remove();
			};

			Modal.prototype.close = function(data) {
				if (this.deferred) {
					this.deferred.resolve(data);
				}
			};

			Modal.prototype.dismiss = function(data) {
				if (this.deferred) {
					this.deferred.reject(data);
				}
			};

			return Modal;
		},
	]);
})();
