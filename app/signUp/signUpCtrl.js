app.controller("signUpCtrl", function ($scope, user, $location) {


    $scope.newUser = {
        communityId:0,
        fname:"",
        lname:"",
        email:"",
        apartment:null,
        isCommitteeMember:true,
        password:""
    }

    $scope.newCommunity = {
        name:"",
        address:"",
        city:"",
    }


    $scope.signUp = function () {
        $scope.invalidLogin = false;
        user.signUp($scope.newCommunity,$scope.newUser).then(function (activeUser) {
            $location.path("/dashboard");
        }, function () {
            $scope.invalidLogin = true;
        })
    }

})