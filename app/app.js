var app = angular.module("HouseCommitteeApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    })
    .when("/dashboard", {
        templateUrl: "app/dashboard/dashboard.html",
        controller: "dashboardCtrl"
    })
    // .when("/signup", {       
    // })
});