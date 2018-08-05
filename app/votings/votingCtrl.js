app.controller("votingCtrl", function ($scope, user) {

    $scope.isUserAdmin = function () {
        return user.isAdmin();
    }
    // user.getMemberVotingArr().then(function (result){        
    //     $scope.votingArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });


    //  user.addMessage(Message).then(function (result){        
    //     $scope.messageArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });
})