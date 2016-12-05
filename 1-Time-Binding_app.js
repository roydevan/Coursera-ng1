(function (){
'use strict';

angular.module ('BindingApp',[])
.controller('BindingAppController',BindingAppController);

BindingAppController.$inject = ['$scope'];

function BindingAppController ($scope){
  $scope.firstName = "DEVAN";
  //$scope.fullName = "";

  $scope.showNumberOfWatchers = function (){
    console.log ("# no. of watchers",$scope.$$watchersCount);
  };

  $scope.setFullName = function (){
    $scope.fullName = $scope.firstName + " " + "ROY";

  };

  $scope.logFirstName = function (){
    console.log ('First Name is : ', $scope.firstName);
  };

  $scope.logFullName = function (){
    console.log ('Full Name is : ', $scope.fullName);
  };
}

})();
