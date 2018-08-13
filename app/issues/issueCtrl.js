app.controller("issueCtrl", function ($scope, user) {

    $scope.newIssue = {
        memberId: 0,
        communityId: 0,
        creationTime: "",
        title: "",
        details: "",
        priority: 1,
        status: 1,
        comments: [{
            memberId: 1,
            creationTime: "",
            details: "Comment",
            comments: []
        }]
    }

    $scope.addIssue = function () {
        $scope.newIssue.picture = $scope.image.dataURL;
        user.addIssue($scope.newIssue).then(function (activeUser) {
            $('#ModalCenter').modal('hide');
        }, function () {
            $scope.invalidLogin = true;
        })
    }

    user.getMemberIssueArr().then(function (result) {
        $scope.issueArr = result;
    }, function (error) {
        $log.error(error);
    });


    $scope.deleteIssue = function (issue) {
        user.deleteIssue(issue).then(function () {}, function () {
            console.log("error");
        })
    }
})