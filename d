[33mcommit a426e360af74257586e139664a0fdb2fd6f59f78[m
Author: MaheshShenoy01 <mmmshenoy@gmail.com>
Date:   Wed Aug 5 01:08:10 2015 +0530

    Added Cart Hover Tab

[1mdiff --git a/Gruntfile.js b/Gruntfile.js[m
[1mindex b110cd3..8c62355 100644[m
[1m--- a/Gruntfile.js[m
[1m+++ b/Gruntfile.js[m
[36m@@ -74,10 +74,10 @@[m [mmodule.exports = function (grunt) {[m
     // The actual grunt server settings[m
     connect: {[m
       options: {[m
[31m-        port: 9000,[m
[32m+[m[32m        port: 7000,[m
         // Change this to '0.0.0.0' to access the server from outside.[m
         hostname: 'localhost',[m
[31m-        livereload: 35729[m
[32m+[m[32m        livereload: 35728[m
       },[m
       livereload: {[m
         options: {[m
[1mdiff --git a/app/scripts/Directives/angShoppingCartDirective.js b/app/scripts/Directives/angShoppingCartDirective.js[m
[1mindex 9ae7a47..348f15d 100644[m
[1m--- a/app/scripts/Directives/angShoppingCartDirective.js[m
[1m+++ b/app/scripts/Directives/angShoppingCartDirective.js[m
[36m@@ -23,8 +23,7 @@[m
              templateUrl: 'views/angShoppingCartPanel.html',[m
              controller: 'angShoppingCartPanelController',[m
              link: function(scope, iElm, iAttrs, controller, trans) {[m
[31m-                 scope.angscdatas = JSON.parse(iAttrs.angscdatas)[m
[31m-                  console.log(scope.angscdatas);[m
[32m+[m[32m                 scope.angscdatas = JSON.parse(iAttrs.angscdatas);[m
                   scope.addTocart = function(obj){[m
                     scope.$emit('addTocart',obj);[m
                     [m
[36m@@ -35,3 +34,4 @@[m
 [m
 })();[m
 [m
[41m+[m
[1mdiff --git a/app/scripts/controllers/angShoppingCartController.js b/app/scripts/controllers/angShoppingCartController.js[m
[1mindex dce0218..4b36dcc 100644[m
[1m--- a/app/scripts/controllers/angShoppingCartController.js[m
[1m+++ b/app/scripts/controllers/angShoppingCartController.js[m
[36m@@ -3,21 +3,23 @@[m
 (function(){[m
  [m
 	angular.module('currprjApp')[m
[31m-    .controller('angShoppingCartController', ['$scope', function($scope) {[m
[31m-       		$scope.basket=[];[m
[31m-       		$scope.totalPrice =0;[m
[31m-       		[m
[31m-            $scope.$on('addTocart',function(e,v){[m
[31m-       			$scope.basket.push(v);[m
[31m-            $scope.totalPrice =totalPriceCalculation();[m
[31m-        [m
[32m+[m[32m    .controller('angShoppingCartController', ['$scope','$rootScope', function($scope,$rootScope) {[m
[32m+[m[41m             [m		[32m $scope.show = false;[m
[32m+[m[32m                 $scope.basket = ($rootScope.mainBasket==undefined)? []:$rootScope.mainBasket;[m
[32m+[m[41m             [m		[32m $scope.totalPrice =($rootScope.MaintotalPrice==0)? []:$rootScope.MaintotalPrice;[m
[32m+[m[32m                 $scope.$on('addTocart',function(e,v){[m
[32m+[m[41m             [m		[32m $scope.basket.push(v);[m
[32m+[m[32m                 $scope.totalPrice =totalPriceCalculation();[m
[32m+[m[32m                 $rootScope.mainBasket =$scope.basket;[m
[32m+[m[32m                 $rootScope.MaintotalPrice =$scope.totalPrice ;[m
           })[m
 [m
[32m+[m
        		function totalPriceCalculation(){[m
             var price =0;[m
        			angular.forEach($scope.basket,function(item,i){[m
              price += item.price;[m
[31m-       				// $scope.totalPrice += item.price;[m
[32m+[m[41m       				[m
        			});[m
             return price;[m
        		}[m
[1mdiff --git a/app/scripts/controllers/main.js b/app/scripts/controllers/main.js[m
[1mindex 7ca1a42..bf84a5b 100644[m
[1m--- a/app/scripts/controllers/main.js[m
[1m+++ b/app/scripts/controllers/main.js[m
[36m@@ -7,7 +7,10 @@[m
  * Controller of the currprjApp[m
  */[m
 angular.module('currprjApp')[m
[31m-    .controller('MainCtrl', ['$scope', 'angDataServiceFactory', 'angMenuDataServiceFactory', function($scope, angDataServiceFactory, angMenuDataServiceFactory) {[m
[32m+[m[32m    .controller('MainCtrl', ['$scope','$rootScope', 'angDataServiceFactory', 'angMenuDataServiceFactory', function($scope,$rootScope,angDataServiceFactory, angMenuDataServiceFactory) {[m
[32m+[m[41m        [m
[32m+[m[32m        $rootScope.MaintotalPrice=0;[m
[32m+[m[32m        $rootScope.mainBasket=[];[m
         angDataServiceFactory.getAngData()[m
             .then(function(response) {[m
                 $scope.angDatas = response.data;[m
[1mdiff --git a/app/styles/shoppingcart.css b/app/styles/shoppingcart.css[m
[1mindex a608c09..e77083f 100644[m
[1m--- a/app/styles/shoppingcart.css[m
[1m+++ b/app/styles/shoppingcart.css[m
[36m@@ -1,4 +1,66 @@[m
 .shoppingCartMain{[m
 width:90%;[m
 margin:0 auto;[m
[32m+[m[41m   [m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.navbar{[m
[32m+[m	[32mfont-size: 18px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32m#myCart{[m
[32m+[m	[32mposition: absolute;[m
[32m+[m[32m    z-index:100;[m
[32m+[m[32m    overflow: auto;[m
[32m+[m	[32mwidth: 500px;[m
[32m+[m	[32mmin-height: 50%;[m
[32m+[m	[32mborder-radius: 10px;[m
[32m+[m	[32mdisplay: inline-block;[m
[32m+[m[32m    background-color: #F6F6EC;[m
[32m+[m[32m   -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;[m
[32m+[m[32m       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;[m
[32m+[m[32m            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;[m
[32m+[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m#myCart img{[m
[32m+[m	[32mborder:dashed 1px;[m
[32m+[m	[32mzoom:1;[m
[32m+[m	[32mmargin: 10px 10px 10px 10px;[m
[32m+[m	[32mborder-radius: 10px;[m
[32m+[m	[32m -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;[m
[32m+[m[32m       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;[m
[32m+[m[32m            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;[m
[32m+[m[32m}[m
[32m+[m[32m#myCart p{[m
[32m+[m	[32mmargin: 10px 10px 10px 10px;[m
[32m+[m	[32mfloat:right;[m
[32m+[m[32m}[m
[32m+[m[32m#myCart:before, #myCart:after[m
[32m+[m[32m{[m
[32m+[m	[32mcontent:"";[m
[32m+[m[32m    position:absolute;[m[41m [m
[32m+[m[32m    z-index:-1;[m
[32m+[m
[32m+[m[32m    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);[m
[32m+[m[32m    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);[m
[32m+[m[32m    box-shadow:0 0 20px rgba(0,0,0,0.8);[m
[32m+[m[32m    top:0;[m
[32m+[m[32m    bottom:0;[m
[32m+[m[32m    left:10px;[m
[32m+[m[32m    right:10px;[m
[32m+[m[32m    -moz-border-radius:100px / 10px;[m
[32m+[m[32m    border-radius:100px / 10px;[m
[32m+[m[32m}[m[41m [m
[32m+[m[32m#myCart:after[m
[32m+[m[32m{[m
[32m+[m	[32mright:10px;[m[41m [m
[32m+[m[32m    left:auto;[m
[32m+[m[32m    -webkit-transform:skew(8deg) rotate(3deg);[m[41m [m
[32m+[m[32m       -moz-transform:skew(8deg) rotate(3deg);[m[41m     [m
[32m+[m[32m        -ms-transform:skew(8deg) rotate(3deg);[m[41m     [m
[32m+[m[32m         -o-transform:skew(8deg) rotate(3deg);[m[41m [m
[32m+[m[32m            transform:skew(8deg) rotate(3deg);[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/app/views/angShoppingCart.html b/app/views/angShoppingCart.html[m
[1mindex b9a4a2e..b39fb2e 100644[m
[1m--- a/app/views/angShoppingCart.html[m
[1m+++ b/app/views/angShoppingCart.html[m
[36m@@ -1,15 +1,27 @@[m
  <!-- Navigation -->[m
  <div class="shoppingCartMain">[m
     <nav class="navbar" role="navigation">[m
[31m-        <div class="container-fluid">[m
[32m+[m[32m        <div class="container-fluid" >[m
             [m
                 <ul class="nav navbar-nav">[m
                     <li>[m
                         <a href="#Home">Home</a>[m
                     </li>[m
[31m-                    <li>[m
[31m-                        <a href="#contact">contact</a>[m
[31m-                   