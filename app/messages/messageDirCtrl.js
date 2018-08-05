app.controller("messageDirCtrl", function ($scope, user) {

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