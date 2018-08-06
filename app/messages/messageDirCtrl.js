app.controller("messageDirCtrl", function ($scope, user, $log) {

    user.getMemberMessageArr().then(function (result){        
        $scope.messageArr=result;
    }, function (error) {
            $log.error(error);
     });


    //  user.addMessage(Message).then(function (result){        
    //     $scope.messageArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });
})