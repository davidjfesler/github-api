var app = angular.module('github-api');

app.service('githubService', function($http, $q){

    var id = "myClientID";
    var sec = "mySecretKeyThing";
    var param = "?client_id=" + id + "&client_secret" + sec;

    this.getUser = function(username){
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + username + param
        }).then(function(results){
            console.log(results);
            dfd.resolve(results);
        })
        return dfd.promise;
    }

});