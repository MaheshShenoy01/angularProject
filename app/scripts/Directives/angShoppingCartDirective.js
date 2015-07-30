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
})();

(function(){
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
                 scope.angscdatas = JSON.parse(iAttrs.angscdatas)
                  console.log(scope.angscdatas);
                  scope.addTocart = function(obj){
                    scope.$emit('addTocart',obj);
                    
              }
          }
         }
     });

})();

