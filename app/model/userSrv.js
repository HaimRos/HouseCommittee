app.factory('user', function ($http, $q, $rootScope) {

    $rootScope.serverPath = "https://json-server-heroku-ueqrgkdrrp.now.sh";

    var activeUser = null;
    var messageArr = [];
    var issueArr = [];

    function User(plainUser) {
        this.id = plainUser.id;
        this.communityId = plainUser.communityId;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.apartment = plainUser.apartment;
        this.isCommitteeMember = plainUser.isCommitteeMember;
    }

    function Message(plainMessage) {
        this.id = plainMessage.id;
        this.memberId = plainMessage.memberId;
        this.communityId = plainMessage.communityID;
        this.creationTime = plainMessage.creationTime;
        this.title = plainMessage.title;
        this.details = plainMessage.details;
        this.priority = plainMessage.priority;
        this.comments = plainMessage.comments;
    }

    function Issue(plainIssue) {
        this.id = plainIssue.id;
        this.memberId = plainIssue.memberId;
        this.communityId = plainIssue.communityID;
        this.creationTime = plainIssue.creationTime;
        this.title = plainIssue.title;
        this.details = plainIssue.details;
        this.priority = plainIssue.priority;
        this.status = plainIssue.status;
        this.comments = plainIssue.comments;
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
        messageArr = [];
        var async = $q.defer();

        var loginURL = $rootScope.serverPath + "/messages?communityID=" + activeUser.communityId.toString();
        $http.get(loginURL).then(function (response) {
                
            if (response.data.length > 0) {
                for (var i=0; i<response.data.length; i++){
                var msg= new Message(response.data[i]);
                messageArr.push(msg);
            }
                async.resolve(messageArr);
            } else {
                async.reject("invalid credentials");
            }
        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }

    function getMemberIssueArr() {
        messageArr = [];
        var async = $q.defer();

        var loginURL = $rootScope.serverPath + "/issues?communityID=" + activeUser.communityId.toString();
        $http.get(loginURL).then(function (response) {
                
            if (response.data.length > 0) {
                for (var i=0; i<response.data.length; i++){
                var msg= new Issue(response.data[i]);
                issueArr.push(msg);
            }
                async.resolve(issueArr);
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
        getMemberMessageArr: getMemberMessageArr,
        getMemberIssueArr:getMemberIssueArr
    }


})