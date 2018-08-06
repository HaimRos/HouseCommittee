app.controller("votingDirCtrl", function ($scope, user, $log) {

    user.getMemberVotingArr().then(function (result){        
        $scope.votingArr=result;
    }, function (error) {
            $log.error(error);
     });


    //  user.addMessage(Message).then(function (result){        
    //     $scope.messageArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });
})