'use strict';

var app = angular.module("ghBusinessCard");

app.controller('MainController',['$scope','$firebaseObject','$firebaseAuth','$q','$location','$window','$http','workingAccount',mainController]);


  function mainController($scope, $firebaseObject, $firebaseAuth, $q, $location, $window,$http ,workingAccount){

      var vm = this;


      var session = workingAccount;


      vm.changeUrl = function(){
        $location.path('/cardview');
      };
      //
      vm.login = function(){
        var ref = new Firebase("https://ghjsbusinesscard.firebaseio.com");
        vm.authObj = $firebaseAuth(ref);
        vm.authObj.$authWithOAuthPopup("github").then(function(authData) {
          console.log("Logged in as:", authData);
          session.setData(authData);
          return $http({
            method: 'GET',
            url: 'https://api.github.com/users/'+authData.github.username+'/repos?per_page=100'
          });
        }).then(function(response){
          console.log("Looks like the HTTP response is on its way back")
          session.setRepoData(response);
          vm.changeUrl();
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
      };
  }



app.controller('CardController',['$scope','$firebaseObject','$firebaseAuth','$http','$window','workingAccount',cardController])


  function cardController($scope, $firebaseObject, $firebaseAuth, $http, $window, workingAccount){
    var vm = this;
    var session = workingAccount;

    var data = session.getData();
    console.log(data);
    vm.user = {
      name: data.github.displayName,
      userName: data.github.username,
      imageUrl: data.github.profileImageURL,
      repos: data.repos,
    };

    vm.saveToDatabase = function(){
      var ref = new Firebase("https://ghjsbusinesscard.firebaseio.com");
      var obj = $firebaseObject(ref);
      console.log(obj)
        obj.user = {
          name : vm.user.name,
          userName: vm.user.userName,
          imageUrl: vm.user.imageUrl,
          repos: vm.user.repos.data,
          repoOne: vm.repoOne,
          repoTwo: vm.repoTwo,
          repoThree: vm.repoThree
        }
        console.log("THIS IS OBJ AFTER ADDITIONS: => " + obj);
        obj.$save().then(function(ref) {
            ref.key() === obj.$id; // true
            console.log("success");
          }, function(error) {
            console.log("Error:", error);
          });
        }
}
