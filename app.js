(function (){
'use strict';
angular.module('MsgApp',[])
.controller('MsgController', MsgController);

MsgController.$inject=['$scope'];
function MsgController ($scope){
$scope.name="Devanjan";
$scope.stateOfBeing='hungry';
$scope.buttonName='Feed Me';

$scope.sayMessage = function (){
  return "Dev likes to eat healthy";
};

$scope.hungry = function (){
  $scope.stateOfBeing='fed';
  $scope.buttonName='Go Back';
}
}

})();
