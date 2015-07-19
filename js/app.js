
var app = angular.module('myApp', ['itemService']);

app.controller('Controller', ['$scope', '$http', 'itemService', function($scope, $http, itemService) {

	function init(){
        var svc = itemService;
        svc.getItems().then(function(data, s){
            $scope.data = data;
        }, function(err,s){
            console.log("fuck this shit")
        });
    }

    init();

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
			if (activityLevel === "Sedentary") {
				activityLevel = 1.2
			} else if (activityLevel === "Light") {
				activityLevel = 1.375
			} else if (activityLevel === "Moderate") {
				activityLevel = 1.55
			} else if (activityLevel === "Hard") {
				activityLevel = 1.725
			} else if (activityLevel === "Very Hard") {
				activityLevel = 1.9
			}
			var convertedWeight = 6.23 * $scope.weight;
			var convertedHeight = 12.7 * $scope.height;
			var convertedAge = 6.8 * $scope.age;
			var bmr = 66 + convertedWeight + convertedHeight - convertedAge
			finalBmr = bmr * activityLevel
			$scope.calorieCount = Math.round(finalBmr)
	};



}]);
