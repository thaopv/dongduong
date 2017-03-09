;(function() {
	'use strict';

	angular.module('ecommerce').directive('handleTab', [
		'@lodash',
		'@jquery',
		'/services/json-helper',
		'/services/event-hub',
		'/data/config',
		function(_, $, jsonHelper, EventHub, config) {
			return {
				link: function($scope, element, attrs) {
					var tabActive = 'tab__active';

					var activeTab = function(tab) {
						var data = jsonHelper.jsonParse(tab);
						if (!data) {
							return;
						}

						EventHub.emit('active:tab', data);
					};

					var removetabActive = function() {
						$('.tab-list').removeClass(tabActive);
					};

					var tabActiveElement = function() {
						element.addClass(tabActive);
					};

					var isActive = function() {
						return element.hasClass(tabActive);
					};

					var handleClickEvent = function() {
						if (isActive()) {
							return;
						}

						removetabActive();
						tabActiveElement();

						activeTab(attrs.handleTab);
					};

					element.bind('click', handleClickEvent);

					$scope.$on('$destroy', function() {
						element.unbind('click');
					});
				},
			};
		},
	]);
})();
