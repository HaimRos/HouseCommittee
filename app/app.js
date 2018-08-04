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
    .when("/messages", {
        templateUrl: "app/messages/messages.html",
        // controller: "dashboardCtrl"
    })
    .when("/issues", {
        templateUrl: "app/issues/issues.html",
        //controller: "dashboardCtrl"
    })
    .when("/votings", {
        templateUrl: "app/votings/votings.html",
        //controller: "dashboardCtrl"
    })
    .when("/tenants", {
        templateUrl: "app/tenants/tenants.html",
        controller: "tenantsCtrl"
    })
});