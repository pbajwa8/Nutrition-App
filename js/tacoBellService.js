var app = angular.module('tacoBell', []);

app.service("tacoBell", function($http, $q){
    this.getItems = function(inputBMR){
        var deferred = $q.defer();
        var specCalories = inputBMR;
        $http.get('https://api.myjson.com/bins/56sby').success(function(data, s){
            var passedCalories = specCalories;
        	var returnArray = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: []};
        	var breaker = 0

        	for (var i = 0; i < 10000; i++) {
        		var newCalories = Math.round(passedCalories/3);
	        	var random = Math.round(Math.floor(Math.random() * (52 + 1)));
	        	var random2 = Math.round(Math.floor(Math.random() * (168 - 66 + 1)) + 66);
	        	var random3 = Math.round(Math.floor(Math.random() * (180 - 169 + 1)) + 169);

			    var mainsCalories = parseInt(data.collection1[random].calories);
			    var mainsEntry = data.collection1[random].item;
			    
			    var sidesCalories = parseInt(data.collection1[random2].calories);
			    var sidesEntry = data.collection1[random2].item;
			    
			    var drinksCalories = parseInt(data.collection1[random3].calories);
			    var drinksEntry = data.collection1[random3].item;
			    
			    var totalCals = mainsCalories + sidesCalories + drinksCalories;
			    
			    if (totalCals <= newCalories) {
			        returnArray[breaker].push(mainsEntry);
			        returnArray[breaker].push(sidesEntry);
			        returnArray[breaker].push(drinksEntry);
			        breaker++;
			    	}
			    if (breaker === 12) { break; }
			};

            deferred.resolve(returnArray);
        }).error(function(err, s){
            deferred.reject(err);
        });
        return deferred.promise;
    }

});