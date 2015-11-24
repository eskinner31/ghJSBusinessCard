app.service('workingAccount', function($firebaseObject,$firebaseAuth,$location,$window){
  var Session = {
    data: {},
    set: function(authData){
      Session.data = authData;
    },
    retrieveSessionData: function(authData){
      if(authData){
        console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
      }else{
        console.log("User is logged out");
      }
    },
    requestSession: function(){
      //Need to refactor this so that it waits for data to return on first login before changing URL
      $location.path('/cardview');
      var ref = new Firebase("https://ghjsbusinesscard.firebaseio.com");
      ref.authWithOAuthPopup("github", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        }else{
           console.log(authData);
        }
      });
    }
  };

  return Session;
});
