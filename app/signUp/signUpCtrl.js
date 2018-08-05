app.controller("signUpCtrl", function ($scope, user, $location) {

    $scope.fname="";
    $scope.lname="";
    $scope.email="";
    $scope.password="";
    $scope.communityName="";
    $scope.street="";
    $scope.city="";

    $scope.signUp = function () {
        $scope.invalidLogin = false;
        user.signUp($scope.fname, $scope.lname, $scope.email, $scope.password, $scope.communityName, $scope.street, $scope.city).then(function (activeUser) {
            $location.path("/dashboard");
        }, function () {
            $scope.invalidLogin = true;
        })
    }

})