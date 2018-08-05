app.controller("dashboardCtrl", function ($scope, user, $rootScope) {

    $rootScope.activeUser = user.getActiveUser();
    $rootScope.isAdmin = user.isAdmin();

    // user.getMemberMessageArr().then(function (result){        
    //     $scope.messageArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });

    //  user.getMemberIssueArr().then(function (result){        
    //     $scope.issueArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });

    //  user.getMemberVotingsArr().then(function (result){        
    //     $scope.votingsArr=result;
    // }, function (error) {
    //         $log.error(error);
    //  });
})