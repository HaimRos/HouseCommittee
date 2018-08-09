app.controller("votingCtrl", function ($scope, user) {

    $scope.newVoting = {
        memberId: 0,
        communityId: 0,
        creationTime: "",
        title: "",
        details: "",
        options: ["Against", "In favor", "Abstained"],
        priority: 1,
        dueDate: "",
        status: 1,
        comments: [{
            memberId: 1,
            creationTime: "",
            details: "Comment",
            comments: []
        }],
        votes: []
    }

    user.getMemberVotingArr().then(function (result) {
        $scope.votingsArr = result;
    }, function (error) {
        $log.error(error);
    });

    $scope.isUserAdmin = function () {
        return user.isAdmin();
    }

    $scope.addVoting = function () {
        var voteOptions = document.getElementById("inputOptions");

        $scope.newVoting.options = voteOptions.value.split(",");

        user.addVoting($scope.newVoting).then(function (activeUser) {
            $('#ModalCenter').modal('hide');
        }, function () {
            $scope.invalidLogin = true;
        })
    }

    $scope.deleteVoting = function (voting) {
        user.deleteVoting(voting).then(function () {}, function () {
            console.log("error");
        })
    }

    $scope.submitVote = function (voting, selection) {
        user.submitVote(voting, selection).then(function () {}, function () {
            console.log("error");
        })
    }



    // Chart 
    $scope.labels = ["New Cars", "Old Cars"];
    $scope.options = {
        legend: {
            display: true
        }
    };

    $scope.data = [];
    $scope.updateChart = function () {
        var newCars = 4;
        var oldCars = 3;
        // for (var i = 0; i < $scope.cars.length; i++) {
        //     if ($scope.cars[i].year > 2012) {
        //         ++newCars;
        //     } else {
        //         ++oldCars
        //     }
        // }

        return [newCars, oldCars];
    }
})