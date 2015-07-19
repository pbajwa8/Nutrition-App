var app = angular.module('itemService', []);

app.service("itemService", function($http, $q){
    this.getItems = function(){
        var deferred = $q.defer();
        $http.get('https://api.myjson.com/bins/1n5yq').success(function(data, s){
        	
        	var specCalories = 1000;
        	var returnArray = [];
        	var breaker = 0
        	for (var i = 0; i < 1000; i++) {
        	var random = Math.round(Math.random() * (200));
        	var random2 = Math.round(Math.random() * (200));
        	var random3 = Math.round(Math.random() * (200));

		    var mainsCalories = parseInt(data.collection1[random].calories);
		    var mainsEntry = data.collection1[random].item;
		    
		    var sidesCalories = parseInt(data.collection1[random2].calories);
		    var sidesEntry = data.collection1[random2].item;
		    
		    var drinksCalories = parseInt(data.collection1[random3].calories);
		    var drinksEntry = data.collection1[random3].item;
		    
		    var totalCals = mainsCalories + sidesCalories + drinksCalories;
		    
		    if (totalCals <= specCalories) {
		        returnArray.push(mainsEntry);
		        breaker++;
		        returnArray.push(sidesEntry);
		        breaker++;
		        returnArray.push(drinksEntry);
		        breaker++;
		    	}
		    if (breaker === 3) { break; }

			};

            deferred.resolve(returnArray);
        }).error(function(err, s){
            deferred.reject(err);
        });
        return deferred.promise;
    }

});
