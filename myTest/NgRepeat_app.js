(function (){
'use strict';

var shoppingList1 = [
  "Milk","Donuts","Cookie","Chocolatte","Peanut Butter"
];
var shoppingList2 = [
{
  name: "Milk",
  qty: "2"
},
{
  name: "Donuts",
  qty: "3"
},
{
  name: "Chocolatte",
  qty: "4"
},
{
  name: "Peanut Butter",
  qty: "5"
}

];


angular.module ('ShoppingListApp', [])
.controller ('ShoppingListController', ShoppingListController);
ShoppingListController.$inject = ['$scope'];

function ShoppingListController ($scope){
$scope.shoppingList1=shoppingList1;
$scope.shoppingList2=shoppingList2;

$scope.addToList = function (){
  var newItem={
    name: $scope.newItemName,
    qty: $scope.newItemQty
  };
  $scope.shoppingList2.push(newItem);
};
}

})();
