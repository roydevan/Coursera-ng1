  (function (){
  'use strict';
  angular.module('MsgApp',[])
  .controller('MsgController', MsgController)
  .filter('loves',LovesFilter)
  .filter('truth',TruthFilter);

  MsgController.$inject=['$scope','$filter','lovesFilter'];
  function MsgController ($scope,$filter,lovesFilter,truthFilter){
  $scope.name="Devanjan";
  $scope.stateOfBeing='hungry';
  $scope.buttonName='Feed Me';
  $scope.cookieCost = .45;

  $scope.sayMessage = function (){
    var msg = 'Dev likes to eat healthy';
    var output = $filter('uppercase')(msg);

    return output;
  };
  $scope.sayLovesMessage = function (){
    var msg = 'Dev likes to eat healthy';
    //var output = $filter('lovesFilter')(msg);
    return lovesFilter(msg);

  };
  $scope.hungry = function (){
  if ($scope.buttonName=="Feed Me") {
    $scope.stateOfBeing='fed';
    $scope.buttonName='Go Back';

  } else {
    $scope.stateOfBeing='hungry';
    $scope.buttonName='Feed Me';
      }
  }
  }
  function LovesFilter(){
    return function (input){
      input = input||"";
      input = input.replace("likes","loves");
      return input;

    };
  }
  function TruthFilter(){
    return function (input,source,target){
      input = input||"";
      input = input.replace(source,target);
      return input;

    };
  }
  })();
