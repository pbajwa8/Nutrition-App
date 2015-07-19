
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

		var convertedActivityLevel;

		var activityLevelConverter = function(activityLevel) {
			if (activityLevel === "sedentary") {
				convertedActivityLevel = 1.2
				return convertedActivityLevel
			} else if (activityLevel === "light") {
				convertedActivityLevel = 1.375
				return convertedActivityLevel
			} else if (activityLevel === "moderate") {
				convertedActivityLevel = 1.55
				return convertedActivityLevel
			} else if (activityLevel === "hard") {
				convertedActivityLevel = 1.725
				return convertedActivityLevel
			} else if (activityLevel === "very hard") {
				convertedActivityLevel = 1.9
				return convertedActivityLevel
			}
		};

		var convertedWeight = 6.23 * $scope.weight;
		var convertedHeight = 12.7 * $scope.height;
		var convertedAge = 6.8 * $scope.age;
		var bmr = 66 + convertedWeight + convertedHeight - convertedAge

		$scope.calorieCount = bmr * convertedActivityLevel;

}]);
