  var app = angular.module("ghBusinessCard", ["firebase","ngRoute","ngResource"]);

  app.config([ '$routeProvider', '$locationProvider','$resourceProvider',function($routeProvider, $locationProvider, $stateProvider,$resourceProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController as MC',
      })
      .when('/cardview' , {
        templateUrl: 'partials/cardview.html',
        controller: 'CardController as CC',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);
