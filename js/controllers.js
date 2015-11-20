app.controller('MainController',function($scope,$firebaseObject,$firebaseAuth,$location,$window,workingAccount){
  var session = workingAccount;

  $scope.changeUrl = function(){
    $location.path('/cardview');
  };

  $scope.login = function(){
    session.requestSession();
  };

});

app.controller('CardController',function($scope,$firebaseObject,$firebaseAuth,workingAccount){
   var retrieveSession = workingAccount.retrieveSessionData;
   var setSession = workingAccount.set;
   var ref = new Firebase("https://ghjsbusinesscard.firebaseio.com");
   ref.onAuth(retrieveSession);
   var authData = ref.getAuth();
   $scope.data = authData;
   $scope.imageUrl = authData.github.profileImageURL;
   $scope.name = authData.github.displayName;
   $scope.userName = authData.github.username;
   console.log($scope.imageUrl);
});
