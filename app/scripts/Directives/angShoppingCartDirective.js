'use strict';

(function(){
	angular.module('currprjApp')
	   .directive('shoppingcart',function(){
	   	 return {
	   	 		restrict:'EA',
	   	 		transclude:true,
	   	 		templateUrl:'views/angShoppingCart.html',
	   	 		controller:'angShoppingCartController'
	   	 }
    });

	 angular.module('currprjApp')
     .directive('panel', function(){
         return {
             restrict: 'EA',
             transclude: true,
             scope: true,
             require: '^shoppingcart',
             templateUrl: 'views/angShoppingCartPanel.html',
             controller: 'angShoppingCartPanelController',
             link: function(scope, iElm, iAttrs, controller, trans) {
                 scope.angscdatas = JSON.parse(iAttrs.angscdatas);
                  scope.addTocart = function(obj){
                    scope.$emit('addTocart',obj);
                    
              }
          }
         }
     });




    angular.module('currprjApp')
     .directive('dropdownlist', function(){
            return {
                restrict: 'E',
                require:"^panel",
                scope:true,
                templateUrl:'views/angShoppingCartDropDown.html'
                

            }
        });
})();