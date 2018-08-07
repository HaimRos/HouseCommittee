app.controller("issueCtrl", function ($scope, user) {

    $scope.newIssue = {
        memberId: 0,
        communityId: 0,
        creationTime: "",
        title: "",
        details: "",
        priority: 1,
        status:1,
        comments: [{
            memberId: 1,
            creationTime: "",
            details: "Comment",
            comments: []
        }]
    }

    $scope.addIssue = function () {
        user.addIssue($scope.newIssue).then(function (activeUser) {
            $('#ModalCenter').modal('hide');
        }, function () {
            $scope.invalidLogin = true;
        })
    }

     


})