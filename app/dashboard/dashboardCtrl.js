app.controller("dashboardCtrl", function ($scope, user) {

    $scope.activeUser = user.getActiveUser();

    user.getMemberMessageArr().then(function (result){        
        $scope.messageArr=result;
    }, function (error) {
            $log.error(error);
     });

     user.getMemberIssueArr().then(function (result){        
        $scope.issueArr=result;
    }, function (error) {
            $log.error(error);
     });
})