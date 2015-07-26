
var app = angular.module('myApp', ['itemService']);

app.controller('Controller', ['$scope', '$http', 'itemService', function($scope, $http, itemService) {

	$scope.weight;
    $scope.height;
    $scope.age;
    $scope.activityLevel;
    $scope.calorieCount;

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
			getItems(finalBmr);
	};


	function getItems(inputBMR){
		var passer = inputBMR
        var svc = itemService;
	        svc.getItems(passer).then(function(data, s){
	            $scope.data = data;
	        }, function(err,s){
	            console.log("fuck this shit")
	        });
    }


}]);
