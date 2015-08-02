
var app = angular.module('myApp', ['mcDonalds', 'tacoBell']);

app.controller('Controller', ['$scope', '$http', 'mcDonalds', 'tacoBell', function($scope, $http, mcDonalds, tacoBell) {

	$scope.weight;
    $scope.height;
    $scope.age;
    $scope.activityLevel;
    $scope.calorieCount;
    $scope.data = {meals: []};

	var finalBmr;

	$scope.onSubmit = function () {
		var weight = angular.copy($scope.weight);
		var height = angular.copy($scope.height);
		var age = angular.copy($scope.age);
		var activityLevel = angular.copy($scope.activityLevel);
		bmrCalculator(weight, height, age, activityLevel);
	}

	function bmrCalculator (weight, height, age, activityLevel) {
			if (activityLevel === "Sedentary (little or no excercise)") {
				activityLevel = 1.2;
			} else if (activityLevel === "Light (light excercise/sports 1-3 days/week)") {
				activityLevel = 1.375;
			} else if (activityLevel === "Moderate (moderate excercise/sports 3-5 days/week)") {
				activityLevel = 1.55;
			} else if (activityLevel === "Hard (hard exercise/sports 6-7 days a week)") {
				activityLevel = 1.725;
			} else if (activityLevel === "Very Hard (very hard exercise/sports & physical job or 2x training)") {
				activityLevel = 1.9;
			}
			var convertedWeight = 6.23 * $scope.weight;
			var convertedHeight = 12.7 * $scope.height;
			var convertedAge = 6.8 * $scope.age;
			var bmr = 66 + convertedWeight + convertedHeight - convertedAge;
			finalBmr = Math.round(bmr * activityLevel);
			$scope.calorieCount = finalBmr;
			getMcDonalds(finalBmr);
	};


	function getMcDonalds(inputBMR){
		var passer = inputBMR;
        var svc = mcDonalds;
	        svc.getItems(passer).then(function(data, s){
	            $scope.data.meals[0] = data[0][0];
	            $scope.data.meals[1] = data[0][1];
	            $scope.data.meals[2] = data[0][2];
	            getTacoBell(passer);
	        }, function(err,s){
	            console.log("fuck this shit")
	        });
    }

    function getTacoBell(inputBMR){
		var passer2 = inputBMR
        var svc = tacoBell;
	        svc.getItems(passer2).then(function(data, s){
	            $scope.data.meals[3] = data[0][0];
	            $scope.data.meals[4] = data[0][1];
	            $scope.data.meals[5] = data[0][2];
	        }, function(err,s){
	            console.log("fuck this shit")
	        });
    }




}]);
