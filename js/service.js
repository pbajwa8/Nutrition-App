var app = angular.module('itemService', []);

app.service("itemService", function($http, $q){
    this.getItems = function(inputBMR){
        var deferred = $q.defer();
        var specCalories = inputBMR;
        $http.get('https://api.myjson.com/bins/1n5yq').success(function(data, s){
            var passedCalories = specCalories;
        	var returnArray = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [], 13: [], 14: [], 15: [], 16: [], 17: [], 18: [], 19: [], 20: []};
        	var breaker = 0

        	for (var i = 0; i < 1000; i++) {
	        	var random = Math.round(Math.floor(Math.random() * (69 - 0 + 1)));
	        	var random2 = Math.round(Math.floor(Math.random() * (132 - 119 + 1)) + 119);
	        	var random3 = Math.round(Math.floor(Math.random() * (220 - 132 + 1)) + 132);

			    var mainsCalories = parseInt(data.collection1[random].calories);
			    var mainsEntry = data.collection1[random].item;
			    
			    var sidesCalories = parseInt(data.collection1[random2].calories);
			    var sidesEntry = data.collection1[random2].item;
			    
			    var drinksCalories = parseInt(data.collection1[random3].calories);
			    var drinksEntry = data.collection1[random3].item;
			    
			    var totalCals = mainsCalories + sidesCalories + drinksCalories;
			    
			    if (totalCals <= passedCalories) {
			        returnArray[breaker].push(mainsEntry);
			        returnArray[breaker].push(sidesEntry);
			        returnArray[breaker].push(drinksEntry);
			        breaker++;
			    	}
			    if (breaker === 21) { break; }
			};

            deferred.resolve(returnArray);
        }).error(function(err, s){
            deferred.reject(err);
        });
        return deferred.promise;
    }

});
