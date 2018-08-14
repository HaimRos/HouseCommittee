app.controller("dashboardCtrl", function ($scope, user, $rootScope, $log) {

    $rootScope.activeUser = user.getActiveUser();
    $rootScope.isAdmin = user.isAdmin();

    user.getMemberMessageArr().then(function (result) {
        $scope.messageArr = result;
        $scope.numOfMessages = $scope.messageArr.length;
    }, function (error) {
        $log.error(error);
    });

    user.getMemberIssueArr().then(function (result) {
        $scope.issueArr = result;
        $scope.numOfIssues = $scope.issueArr.length;
    }, function (error) {
        $log.error(error);
    });

    user.getMemberVotingArr().then(function (result) {
        $scope.votingsArr = result;
        $scope.numOfVotings = $scope.votingsArr.length;
    }, function (error) {
        $log.error(error);
    });

    user.getTenantsArr().then(function (result) {
        $scope.tenantsArr = result;
    }, function (error) {
        $log.error(error);
    });
})