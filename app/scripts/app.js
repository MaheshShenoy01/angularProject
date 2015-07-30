'use strict';
/**
 * @ngdoc overview
 * @name currprjApp
 * @description
 * # currprjApp
 * Main module of the application.
 */
angular.module('currprjApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/angLogin', {
        template:'<ang-login></ang-login>'
      })
       .when('/angShoppingCart', {
        template:'<shoppingcart><panel angscdatas="{{fruits}}"></panel></shoppingcart>',
         controller:'angShoppingCartPanelController'
      })
       .when('/angShoppingCart/fruits', {
        template:'<shoppingcart><panel angscdatas="{{fruits}}"></panel></shoppingcart>',
         controller:'angShoppingCartPanelController'
      })
       .when('/angShoppingCart/Groceries', {
        template:'<shoppingcart><panel angscdatas="{{Groceries}}"></panel></shoppingcart>',
         controller:'angShoppingCartPanelController'
      })
       .when('/angShoppingCart/vegetables', {
        template:'<shoppingcart><panel angscdatas="{{vegetables}}"></panel></shoppingcart>',
         controller:'angShoppingCartPanelController'
      })
       .when('/angShoppingCart/snacks', {
        template:'<shoppingcart><panel angscdatas="{{snacks}}"></panel></shoppingcart>',
         controller:'angShoppingCartPanelController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).directive("markable", function($timeout) {
     return {
        link: function(scope, elem, attrs) {
            elem.on("click", function() {
                elem.toggleClass("active2");
            });
        }
    

    };
}).controller('menucontroller', function($scope){
      $scope.menuItems = [
    {'item':"angLogin"},
    {'item':"angShoppingCart"},
    {'item':"angValidaiton"},
    {'item':"angBuiltinDirectives"},
    {'item':"angCustomDirectives"},
    {'item':"angRouteParams"},
    {'item':"angProviders"},
    {'item':"anglink"},
    {'item':"angcompile"},
    {'item':"angvalidation"},
    {'item':"angAnimation"},
    {'item':"angNgrepeat"},
    {'item':"angNgif"},
    {'item':"angNgshow"},
    {'item':"angNgModel"},
    {'item':"angNgView"},
    {'item':"angNgrepeat"},
    {'item':"angNgif"},
    {'item':"angNgshow"},
    {'item':"angNghide"},
    {'item':"angNgApp"}
];


  
  $scope.selectedIndex = 0;
  
  $scope.clicked = function ($index) {
   
    $scope.selectedIndex = $index;
  }
});
