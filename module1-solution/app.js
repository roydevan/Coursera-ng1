(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope){
$scope.name="";
$scope.checkLunch = function () {
  var totalNameValue = calculateNumericForString($scope.name);

  if ($scope.name =="") {
    $scope.messageDisplay='Please enter data first';
    $scope.color = "red";

  }
  else if (totalNameValue >3) {
    $scope.messageDisplay='Too Much!';
    $scope.color = "green";

  } else {
    $scope.messageDisplay='Enjoy!';
    $scope.color = "green";

  }

};

function calculateNumericForString(stringToSplit){
  var arrayOfStrings = stringToSplit.split(',');

  return arrayOfStrings.length;
}


}


})();
