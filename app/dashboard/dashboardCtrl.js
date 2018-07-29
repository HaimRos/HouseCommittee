app.controller("dashboardCtrl", function ($scope, user) {

    $scope.activeUser = user.getActiveUser();
    // $scope.messageArr = user.getMemberMessageArr();

    $scope.messageArr = [{creationTime:"", title:"message No' 1", details: "message no'1 details", priority: 1},
                         {creationTime:"", title:"message No' 2", details: "message no'2 details", priority: 3},
                         {creationTime:"", title:"message No' 3", details: "message no'3 details", priority: 2},
                         {creationTime:"", title:"message No' 4", details: "message no'4 details", priority: 1}
                        ];
})