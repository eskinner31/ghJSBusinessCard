app.service('workingAccount', Session);
  function Session($location,$window,$http){
    var self = this;
    this.data = {};
    return {
      getData : function(){
        return self.data;
      },
      setData : function(data){
        self.data = data;
      },
      setRepoData : function(response){
        self.data.repos = response;
      },
    };
  }
