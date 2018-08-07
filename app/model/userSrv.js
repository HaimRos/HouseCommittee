app.factory('user', function ($http, $q, $rootScope) {

    $rootScope.serverPath = "https://json-server-heroku-sdrvstbtky.now.sh";

    var activeUser = null;
    var messageArr = [];
    var issueArr = [];
    var votingsArr = [];
    var tenantsArr = [];

    function Community(plainCommunity) {
        this.id = plainCommunity.id;
        this.name = plainCommunity.name;
        this.address = plainCommunity.address;
        this.city = plainCommunity.city;
    }

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
        this.communityId = plainMessage.communityId;
        this.creationTime = plainMessage.creationTime;
        this.title = plainMessage.title;
        this.details = plainMessage.details;
        this.priority = plainMessage.priority;
        this.comments = plainMessage.comments;
    }

    function Issue(plainIssue) {
        this.id = plainIssue.id;
        this.memberId = plainIssue.memberId;
        this.communityId = plainIssue.communityId;
        this.creationTime = plainIssue.creationTime;
        this.title = plainIssue.title;
        this.details = plainIssue.details;
        this.priority = plainIssue.priority;
        this.status = plainIssue.status;
        this.comments = plainIssue.comments;
    }

    function Voting(plainVote) {
        this.id = plainVote.id;
        this.memberId = plainVote.memberId;
        this.communityId = plainVote.communityId;
        this.creationTime = plainVote.creationTime;
        this.title = plainVote.title;
        this.details = plainVote.details;
        this.optoins = plainVote.optoins;
        this.priority = plainVote.priority;
        this.dueDate = plainVote.dueDate;
        this.comments = plainVote.comments;
        this.votes = plainVote.votes;
    }

    function Tenant(plainTenant) {
        this.id = plainTenant.id;
        this.communityId = plainTenant.communityId;
        this.fname = plainTenant.fname;
        this.lname = plainTenant.lname;
        this.email = plainTenant.email;
        this.apartment = plainTenant.apartment;
        this.isCommitteeMember = plainTenant.isCommitteeMember;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function isAdmin() {
        return activeUser.isCommitteeMember ? true : false;
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


    function signUp(community, user) {
        var async = $q.defer();
        var userSignUpURL = $rootScope.serverPath + "/members";
        var communitySignUpURL = $rootScope.serverPath + "/communities";

        $http.post(communitySignUpURL, community).then(function (response) {
            var newCommunity = new Community(response.data);

            user.communityId = newCommunity.id;
            $http.post(userSignUpURL, user).then(function (response) {
                activeUser = new User(response.data);
                async.resolve(activeUser);
            }, function (err) {
                async.reject(err);
            });

        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    }

    function addTenant(user) {
        var newUser=null;
        var async = $q.defer();
        var userSignUpURL = $rootScope.serverPath + "/members";
        user.communityId = activeUser.communityId;
        $http.post(userSignUpURL, user).then(function (response) {
            newUser = new User(response.data);
            tenantsArr.push(newUser);
            async.resolve(newUser);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    }

    function addMessage(message) {
        var newMessage=null;
        var async = $q.defer();
        var messagesURL = $rootScope.serverPath + "/messages";
        message.memberId=activeUser.id;
        message.communityId=activeUser.communityId;
        $http.post(messagesURL, message).then(function (response) {
            newMessage = new Message(response.data);
            messageArr.push(newMessage);
            async.resolve(newMessage);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    }
    function addIssue(issue) {
        var newIssue=null;
        var async = $q.defer();
        var IssuesURL = $rootScope.serverPath + "/Issues";
        issue.memberId=activeUser.id;
        issue.communityId=activeUser.communityId;
        $http.post(IssuesURL, issue).then(function (response) {
            newIssue = new Issue(response.data);
            issueArr.push(newIssue);
            async.resolve(newIssue);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    }
    function addVoting(voting) {
        var newVoting=null;
        var async = $q.defer();
        var votingsURL = $rootScope.serverPath + "/votings";
        voting.memberId=activeUser.id;
        voting.communityId=activeUser.communityId;
        $http.post(votingsURL, voting).then(function (response) {
            newVoting = new Voting(response.data);
            votingsArr.push(newVoting);
            async.resolve(newVoting);
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

        var loginURL = $rootScope.serverPath + "/messages?communityId=" + activeUser.communityId.toString();
        $http.get(loginURL).then(function (response) {

            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    var msg = new Message(response.data[i]);
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
        issueArr = [];
        var async = $q.defer();

        var loginURL = $rootScope.serverPath + "/issues?communityId=" + activeUser.communityId.toString();
        $http.get(loginURL).then(function (response) {

            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    var msg = new Issue(response.data[i]);
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

    function getMemberVotingArr() {
        votingsArr = [];
        var async = $q.defer();

        var loginURL = $rootScope.serverPath + "/votings?communityId=" + activeUser.communityId.toString();
        $http.get(loginURL).then(function (response) {

            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    var vote = new Voting(response.data[i]);
                    votingsArr.push(vote);
                }
                async.resolve(votingsArr);
            } else {
                async.reject("invalid credentials");
            }
        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }

    function getTenantsArr() {
        tenantsArr = [];
        var async = $q.defer();

        var loginURL = $rootScope.serverPath + "/members?communityId=" + activeUser.communityId.toString();
        $http.get(loginURL).then(function (response) {

            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    var tenant = new Tenant(response.data[i]);
                    tenantsArr.push(tenant);
                }
                async.resolve(tenantsArr);
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
        signUp: signUp,
        addTenant:addTenant,
        addMessage: addMessage,
        addIssue: addIssue,
        addVoting:addVoting,
        isLoggedIn: isLoggedIn,
        isAdmin: isAdmin,
        logout: logout,
        getActiveUser: getActiveUser,
        getMemberMessageArr: getMemberMessageArr,
        getMemberIssueArr: getMemberIssueArr,
        getMemberVotingArr: getMemberVotingArr,
        getTenantsArr: getTenantsArr,
    }


})