(function (){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items=ShoppingListCheckOffService.getItems();

  toBuy.addItem=function (itemIndex,itemName,quantity){
    ShoppingListCheckOffService.addItem(itemIndex,itemName,quantity);
  }

};

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.items=ShoppingListCheckOffService.getBoughtItems();

};

function ShoppingListCheckOffService (){

  var service=this;
  var shoppingList = [
  {
    name: "Milk",
    qty: "2"
  },
  {
    name: "Donuts",
    qty: "3"
  },
  {
    name: "Chocolate",
    qty: "4"
  },
  {
    name: "Peanut Butter",
    qty: "5"
  },
  {
    name: "Cookies",
    qty: "15"
  }

  ];
  var boughtItems=[];

  service.addItem = function (itemIndex,itemName,quantity){
    var boughtItem={
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(boughtItem);
    shoppingList.splice(itemIndex,1);
    console.log(boughtItems.length);
  };

  service.getBoughtItems = function(){
    return boughtItems;
  };

  service.getItems = function(){
    return shoppingList;
  };

}


})();
