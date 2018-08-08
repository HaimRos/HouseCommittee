app.controller("votingCtrl", function ($scope, user) {

    $scope.newVoting = {
        memberId: 0,
        communityId: 0,
        creationTime: "",
        title: "",
        details: "",
        options:["Against", "In favor", "Abstained"],
        priority: 1,
        dueDate:"",
        status:1,
        comments: [{
            memberId: 1,
            creationTime: "",
            details: "Comment",
            comments: []
        }],
        votes:[{
            memberId:0,
            vote:""
        }]
    }

    user.getMemberVotingArr().then(function (result){        
        $scope.votingArr=result;
    }, function (error) {
            $log.error(error);
     });

    $scope.isUserAdmin = function () {
        return user.isAdmin();
    }

    $scope.addVoting = function () {
        user.addVoting($scope.newVoting).then(function (activeUser) {
            $('#ModalCenter').modal('hide');
        }, function () {
            $scope.invalidLogin = true;
        })
    }

    $scope.deleteVoting = function (voting) {
        user.deleteMessage(voting).then(function () {
        }, function () {
            console.log("error");
        })
        $scope.$apply();
    }

})