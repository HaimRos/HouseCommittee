app.controller("tenantsCtrl", function ($scope, user) {

    user.getTenantsArr().then(function (result){        
        $scope.tenantsArr=result;
    }, function (error) {
            $log.error(error);
     });


     function addTenant(){
         
     }
})