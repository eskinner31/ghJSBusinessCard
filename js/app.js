var app = angular.module("ghBusinessCard", ["firebase","ngRoute"]);

app.config([ '$routeProvider', '$locationProvider',function($routeProvider, $locationProvider, $stateProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'MainController'
    })
    .when('/cardview', {
      templateUrl: 'partials/cardview.html',
      controller: 'CardController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
}]);
