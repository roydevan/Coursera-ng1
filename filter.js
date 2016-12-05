var numberArray = [1,2,3,4,5,6,7,8];
console.log ('NUmber array', numberArray);


function above5 (value){
  return value >5;
};
var filteredNumberArray = numberArray.filter (above5);
console.log('Filetered Array', filteredNumberArray);

var shoppingList = [
  "milk","aaa","bbb","cbc"
];
console.log(shoppingList);

var searchValue = 'b';
function containsFilter(value){
  return value.indexOf(searchValue) != -1;
}

var searchedShoppingList = shoppingList.filter(containsFilter);
console.log(searchedShoppingList);
