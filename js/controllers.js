app.controller('MainController',function($scope,$firebaseObject,$firebaseAuth,$location,$window){
  var ref = new Firebase("https://ghjsbusinesscard.firebaseio.com");

  $scope.login = function(){
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $window.location.href('/cardview');
      }

    });

  };
});

app.controller('CardController',function($scope,$firebaseObject,$firebaseAuth){

});
