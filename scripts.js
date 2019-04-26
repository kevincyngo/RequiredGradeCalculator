var mainApp = angular.module("mainApp", []);

mainApp.controller('gradeController', function ($scope) {
    $scope.required = 50
    $scope.clicks = 0
    $scope.isVisible = false;
    $scope.gradeWeight = [{ 'weight': '', 'grade': '' }];

    $scope.current = "";
    $scope.desired = "";
    $scope.calculateRequiredGrade = function () {
        var currentWeight = 0
        var currentGrade = 0
        var remainingWeight = 0
        if ($scope.gradeWeight.length == 0) {

        } else {
            for (i = 0; i < $scope.gradeWeight.length; ++i) {
                g = $scope.gradeWeight[i].grade
                w = $scope.gradeWeight[i].weight
                currentGrade += (w / 100.0) * g
                currentWeight += (w / 100.0)
            }
            $scope.isVisible = true;
            remainingWeight = 1.0 - currentWeight

            gradeToPass = ($scope.required - currentGrade) / (1 - currentWeight)

            if (currentWeight == 0) {
                avgGrade = 0;
            } else {
                avgGrade = (currentGrade * (1 / currentWeight)).toFixed(2)
            }

            $scope.current = ("You have an average grade of " + avgGrade + " with a combined weight of " + (currentWeight * 100.0).toFixed(2) + "%.");
            $scope.desired = ("To achieve a grade of " + $scope.required + " you will need to get a grade of "
                + (($scope.required - currentGrade) / remainingWeight).toFixed(2) + " on the remaining " + (remainingWeight * 100.0).toFixed(2) + "%.");
        }

    }

    $scope.addNewGrade = function () {
        var newItemNo = $scope.gradeWeight.length + 1;
        $scope.gradeWeight.push({ 'weight': '', 'grade': '' });
    };

    $scope.removeGrade = function (item) {
        var index = $scope.gradeWeight.indexOf(item);
        $scope.gradeWeight.splice(index, 1);
    };
});
