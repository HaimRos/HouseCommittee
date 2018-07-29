app.factory('user', function ($http, $q, $rootScope) {

    $rootScope.serverPath = "https://json-server-heroku-pxkilxfxjr.now.sh";

    var activeUser = null;

    function User(plainUser) {
        this.id = plainUser.id;
        this.communityId = plainUser.communityId;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.apartment = plainUser.apartment;
        this.isCommitteeMember = plainUser.isCommitteeMember;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function login(email, password) {
        var async = $q.defer();

        var loginURL = $rootScope.serverPath + "/members?email=" + email + "&password=" + password;
        $http.get(loginURL).then(function (response) {
            if (response.data.length > 0) {
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                async.reject("invalid credentials");
            }
        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }

    function getActiveUser() {
        return activeUser;
    }

    function getMemberMessageArr() {
        var async = $q.defer();

        var loginURL = $rootScope.serverPath + "/members?email=" + email + "&password=" + password;
        $http.get(loginURL).then(function (response) {
            if (response.data.length > 0) {
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                async.reject("invalid credentials");
            }
        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser,
        getMemberMessageArr: getMemberMessageArr
    }


})