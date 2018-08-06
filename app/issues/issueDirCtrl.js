app.controller("issueDirCtrl", function ($scope, user, $log) {


    user.getMemberIssueArr().then(function (result){        
        $scope.issueArr=result;
    }, function (error) {
            $log.error(error);
     });

    //  user.addIssue(Issue).then(function (result){        
    //     $scope.issueArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });
})