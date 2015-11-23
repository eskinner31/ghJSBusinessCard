app.controller('MainController',function($scope,$firebaseObject,$firebaseAuth,$location,$window,workingAccount){
  var session = workingAccount;

  $scope.changeUrl = function(){
    $location.path('/cardview');
  };

  $scope.login = function(){
    session.requestSession();
  };

});

app.controller('CardController',function($scope,$firebaseObject,$firebaseAuth,$http,workingAccount){
   var retrieveSession = workingAccount.retrieveSessionData;
   var setSession = workingAccount.set;
   var ref = new Firebase("https://ghjsbusinesscard.firebaseio.com");
   ref.onAuth(retrieveSession);
   var authData = ref.getAuth();
   var currentUser = {
     name : authData.github.displayName,
     userName : authData.github.username,
     imageUrl : authData.github.profileImageURL,
     htmlUrl : authData.github.cachedUserProfile.html_url,
     location : authData.github.cachedUserProfile.locaiton,
     apiUrl : authData.github.cachedUserProfile.url,
     key : authData.github.accessToken,
   };
   angular.element(document).ready(getRepos);

   $scope.data = currentUser;

   console.log(currentUser.repos);

   function getRepos(){
     $http({
       method:'GET',
       url:'https://api.github.com/users/'+currentUser.userName+'/repos?page=2'
     }).then(function(response){
        currentUser.repos = response;
        console.log(response);
        return response;
     }, function(error){
        console.log(error);
     });
   }


});
