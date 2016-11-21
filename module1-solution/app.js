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

  }
  else if (totalNameValue >3) {
    $scope.messageDisplay='Too Much!';

  } else {
    $scope.messageDisplay='Enjoy!';

  }

};

function calculateNumericForString(stringToSplit){
  var arrayOfStrings = stringToSplit.split(',');

  return arrayOfStrings.length;
}


}


})();
