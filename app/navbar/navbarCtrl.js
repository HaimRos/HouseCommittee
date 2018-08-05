app.controller("navbarCtrl", function ($scope, user, $location) {

    $scope.isUserLoggedIn = function () {
        return user.isLoggedIn();
    }
    $scope.isUserAdmin = function () {
        return user.isAdmin();
    }
    $scope.logout = function () {
        user.logout();
        $location.path("/");
    }
})