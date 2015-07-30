'use strict';

(function(){
 
	angular.module('currprjApp')
    .controller('angShoppingCartController', ['$scope', function($scope) {
       		$scope.basket=[];
       		$scope.totalPrice =0;
       		
            $scope.$on('addTocart',function(e,v){
       			$scope.basket.push(v);
            $scope.totalPrice =totalPriceCalculation();
        
          })

       		function totalPriceCalculation(){
            var price =0;
       			angular.forEach($scope.basket,function(item,i){
             price += item.price;
       				// $scope.totalPrice += item.price;
       			});
            return price;
       		}
    }]);

}());