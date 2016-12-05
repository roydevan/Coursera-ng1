(function (){
'use strict';

angular.module('CounterApp',[])
.controller ('CounterController',CounterController2);

CounterController2.$inject=['$scope','$timeout'];

function CounterController2($scope,$timeout){
  $scope.onceCounter =0;
  $scope.counter =0;
  //$scope.name="Devanjan";

  $scope.showNumberofWatchers = function () {
  console.log("# of Watchers",$scope.$$watchersCount);
};

$scope.countOnce = function () {
  $scope.onceCounter = 1;
};

$scope.upCounter = function () {
  $timeout(function () {
    $scope.counter++;
    console.log('counter incremented');

  },2000)

}
//============
// $scope.upCounter = function () {
//   setTimeout (function(){
//     $scope.$apply(function (){
//       $scope.counter++;
//       console.log('counter incremented');
//     });
//   },2000);
// };
//============
  // $scope.upCounter = function () {
  //   setTimeout (function(){
  //     $scope.counter++;
  //     console.log('counter incremented');
  //     //$scope.$digest();
  //
  //   },2000)
//};
//============

$scope.$watch(function (){
console.log("Digest Loop Fired");
});
//============
// $scope.$watch('onceCounter',function (newValue, oldValue){
//   console.log("onceCounter old value :", oldValue);
//   console.log("onceCounter new Value :", newValue);
// });
//
// $scope.$watch('counter',function (newValue, oldValue){
//   console.log("counter old value :", oldValue);
//   console.log("counter new Value :", newValue);
// });

}

})();
