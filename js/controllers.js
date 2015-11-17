app.controller('MainController',function($scope,$firebaseObject,$firebaseAuth,$location,$window,workingAccount){
  var ref = new Firebase("https://ghjsbusinesscard.firebaseio.com");
  $scope.session = workingAccount;

  $scope.changeUrl = function(){
    $location.path('/cardview');
  };

  $scope.login = function(){
    $location.path('/cardview');
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        $scope.session.saveSession(authData);
        //console.log("Authenticated successfully with payload:", authData);
      }
    });
  };
});

app.controller('CardController',function($scope,$firebaseObject,$firebaseAuth,workingAccount){
  var session = workingAccount;
});
