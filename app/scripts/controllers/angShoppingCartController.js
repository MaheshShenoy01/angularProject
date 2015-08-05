'use strict';

(function(){
 
	angular.module('currprjApp')
    .controller('angShoppingCartController', ['$scope','$rootScope', function($scope,$rootScope) {
             		 $scope.show = false;
                 $scope.basket = ($rootScope.mainBasket===undefined)? []:$rootScope.mainBasket;
             		 $scope.totalPrice =($rootScope.MaintotalPrice===0)? []:$rootScope.MaintotalPrice;
                 $scope.$on('addTocart',function(e,v){
             		 $scope.basket.push(v);
                 $scope.totalPrice =totalPriceCalculation();
                 $rootScope.mainBasket =$scope.basket;
                 $rootScope.MaintotalPrice =$scope.totalPrice ;
          });


       		function totalPriceCalculation(){
            var price =0;
       			angular.forEach($scope.basket,function(item){
             price += item.price;
       				
       			});
            return price;
       		}
    }]);

}());