;(function() {
	'use strict';

	angular.module('ecommerce').directive('tab', [
		'@lodash',
		'$timeout',
		'/services/partial',
		'/services/template',
		'/services/event-hub',
		'/data/config',
		function(_, $timeout, partial, template, EventHub, config) {
			return {
				restrict: 'E',
				templateUrl: partial('tab'),
				scope: {
					tabs: '=',
				},
				controller: [
					'$scope',
					function($scope) {
						function setData(tab) {
							$timeout(function() {
								$scope.data = {
									template: template(tab.template),
									resolves: tab.resolves || {},
								};
							});
						}

						$scope.$watch('tabs', function(tabsLoaded) {
							if (!tabsLoaded ||
								!tabsLoaded.length) {
								return;
							}

							var tabActivated = _.find(tabsLoaded, function(tab) {
								return !!tab.activated;
							});

							if (!tabActivated) {
								tabActivated = _.first(tabsLoaded);
							}

							setData(tabActivated);
						});

						var unhandleActiveTab = EventHub.on('active:tab', function(tab) {
							setData(tab);
						});

						$scope.$on('$destroy', function() {
							unhandleActiveTab();
						});
					},
				],
			};
		},
	]);
})();
