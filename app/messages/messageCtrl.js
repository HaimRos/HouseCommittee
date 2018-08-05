app.controller("messageCtrl", function ($scope, user) {

    $scope.isUserAdmin = function () {
        return user.isAdmin();
    }
    
    function addMessage(msg){
      user.addMessage(msg).then(function (result){        
         $scope.messageArr=result;
     }, function (error) {
             $log.error(error);
      });
    }

})