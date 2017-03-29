;(function() {
	'use strict';

	angular.module('ecommerce').directive('handleSubMenu', [
		'@lodash',
		'@jquery',
		function(_, $) {
			return {
				link: function($scope, element, attrs) {
					var menuActive = 'sub-menu__active';

					var removeSubMenuActive = function() {
						$('.sub-menu-items').removeClass(menuActive);
					};

					var menuActiveElement = function() {
						element.addClass(menuActive);
					};

					var isActive = function() {
						return element.hasClass(menuActive);
					};

					var handleClickEvent = function() {
						if (isActive()) {
							return;
						}

						removeSubMenuActive();
						menuActiveElement();
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
