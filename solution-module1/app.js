(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.LunchContent = "";
  $scope.CheckResult = "";

  $scope.CheckLunch = function () {
    var LunchArray = [];
    var LunchCount = 0;

    LunchArray = $scope.LunchContent.split(',');

    for (var i = LunchArray.length - 1; i >= 0; i--) {
      if (LunchArray[i].trim() > "") {
        LunchCount++;
      }
    }

    if ($scope.LunchContent === "") {
      $scope.CheckResult = "Please enter data first";
    }
    else if (LunchCount <= 3) {
      $scope.CheckResult = "Enjoy!";
    }
    else if (LunchCount > 3) {
      $scope.CheckResult = "Too Much!";
    }

  };
}

})();
