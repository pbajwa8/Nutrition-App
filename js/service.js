var app = angular.module('itemService', []);

app.service("itemService", function($http, $q){
    this.getItems = function(){
        var deferred = $q.defer();
        $http.get('https://api.myjson.com/bins/1n5yq').success(function(data, s){
            deferred.resolve(data);
        }).error(function(err, s){
            deferred.reject(err);
        });
        return deferred.promise;
    }

});
