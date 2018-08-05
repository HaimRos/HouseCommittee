app.controller("signUpCtrl", function ($scope, user, $location) {

    $scope.email = "";
    $scope.password = "";
    $scope.invalidLogin = false;

    $scope.login = function () {
        $scope.invalidLogin = false;
        user.login($scope.email, $scope.password).then(function (activeUser) {
            $location.path("/dashboard");
        }, function () {
            $scope.invalidLogin = true;
        })
    }


})