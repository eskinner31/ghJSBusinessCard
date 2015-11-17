app.factory('workingAccount', function(){
  var Session = {
    data: {},
    saveSession: function(input){
      Session.data = input;
    }
  };
  return Session;
});
