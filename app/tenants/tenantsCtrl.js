app.controller("tenantsCtrl", function ($scope, user, $log) {


    $scope.newTenant = {
        communityId: 0,
        fname: "",
        lname: "",
        email: "",
        apartment: 0,
        isCommitteeMember: false,
        password: "",
        picture: ""
    }

    user.getTenantsArr().then(function (result) {
        $scope.tenantsArr = result;
    }, function (error) {
        $log.error(error);
    });


    $scope.addTenant = function () {
        $scope.invalidLogin = false;
        $scope.newTenant.picture = $scope.image.dataURL;
        user.addTenant($scope.newTenant).then(function (activeUser) {
            $('#ModalCenter').modal('hide');
        }, function () {
            $scope.invalidLogin = true;
        })
    }

    $scope.deleteTenant = function (tenant) {
        user.deleteTenant(tenant).then(function () {}, function () {
            console.log("error");
        })
    }
})