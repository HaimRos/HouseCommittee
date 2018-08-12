app.controller("votingCtrl", function ($scope, user) {

    $scope.newVoting = {
        memberId: null,
        communityId: null,
        creationTime: null,
        title: null,
        details: null,
        options: [],
        priority: 1,
        dueDate: null,
        status: null,
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

    $scope.labels = [];
    $scope.options = {
        legend: {
            display: true
        }
    };

    $scope.data = [];

    $scope.updateChart = function (voting) {
        var optionToLook = "";
        var votesforOption;
        var voted = 0;
        var chartData = [];
        $scope.labels = voting.options.slice(0, voting.options.length);
        $scope.labels.push("Didn't Vote");
        $scope.dataForChart=[];
        var numOfTenants = user.getTenantsArrLength();
        for (var i = 0; i < voting.options.length; i++) {
            optionToLook = voting.options[i];
            votesforOption = 0;
            for (var j = 0; j < voting.votes.length; j++) {
                if (voting.votes[j].vote === optionToLook)
                    votesforOption++;
            }
            chartData.push(votesforOption)
            voted += votesforOption;
        }
        chartData.push(numOfTenants - voted)
        $scope.dataForChart=chartData;
         return (null);
    }
})