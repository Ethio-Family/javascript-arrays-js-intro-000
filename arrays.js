var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];


function addElementToBeginningOfArray (array, element) {
  var newArray = new Array();
  newArray = [element, ...array]
  return newArray;
}



function destructivelyAddElementToBeginningOfArray(array, element) {

  array.unshift(element)
  return array;
}

function addElementToEndOfArray (array, element) {
  var newArray = new Array();
  newArray = [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

// Define a function in arrays.js called accessElementInArray. 
//The function should accept an array and an index and return the element at that index.

function accessElementInArray(array, index) {
  return array[index];
}
