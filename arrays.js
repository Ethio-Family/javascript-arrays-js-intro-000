var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];


function addElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  var newArray = new Array();
  newArray = [ ...array, element]
  return newArray;
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function destructivelyAddElementToEndOfArray() {
  array.push(element)
  var newArray = new Array();
  newArray = [element, ...array]
  return newArray;
}
