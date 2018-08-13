var app = angular.module("HouseCommitteeApp", ["ngRoute", "imageupload", "chart.js"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCtrl"
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
            controller: "messageCtrl"
        })
        .when("/issues", {
            templateUrl: "app/issues/issues.html",
            controller: "issueCtrl"
        })
        .when("/votings", {
            templateUrl: "app/votings/votings.html",
            controller: "votingCtrl"
        })
        .when("/tenants", {
            templateUrl: "app/tenants/tenants.html",
            controller: "tenantsCtrl"
        })
        .when("/signUp", {
            templateUrl: "app/signUp/signUp.html",
            controller: "signUpCtrl"
        })
});