app.controller("messageCtrl", function ($scope, user) {

    $scope.newMessage = {
        memberId: 0,
        communityId: 0,
        creationTime: "",
        title: "",
        details: "",
        priority: 1,
        comments: [{
            memberId: 1,
            creationTime: "",
            details: "Comment",
            comments: []
        }]
    }

    $scope.isUserAdmin = function () {
        return user.isAdmin();
    }


    $scope.addMessage = function () {
        user.addMessage($scope.newMessage).then(function (activeUser) {
            $('#ModalCenter').modal('hide');
        }, function () {
            $scope.invalidLogin = true;
        })

    }

    $scope.deleteMessage = function (message) {
        user.deleteMessage(message).then(function () {
        }, function () {
            console.log("error");
        })
        $scope.$apply();
    }

    user.getMemberMessageArr().then(function (result){        
        $scope.messageArr=result;
    }, function (error) {
            $log.error(error);
     });



})
