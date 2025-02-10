/*
 * Arrow Functions:
 *
 * From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 */

let array1 = [5, 12, 8, 130, 44];

// Like we would write in CSCI 111 or 141
function isLargeNumber(element) {
  if (element > 20) {
    return true;
  }
  return false;
}

// A little better
function isLargeNumber(element) {
  return element > 20;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

/* Same as above, but without defining a new function, isLargeNumber,
 * and instead using an "anonymous function"
 */
console.log(array1.findIndex(function (element) { return element > 20; }));

/* or... use an Arrow function */
console.log(array1.findIndex((element) => { return element > 20; }));

/* or more cleanly */
console.log(array1.findIndex((element) => element > 20));

/* or even more succinctly, if only one parameter, drop () */
console.log(array1.findIndex(element => element > 20));


/* Arrow function example */
let bigger = arr => arr.findIndex(element => element > 20);

/* does same as these two functions together*/
function isLargeNumber(element) {
  return element > 20;
}

function bigger(arr) {
  return arr.findIndex(isLargeNumber);
}

/* Could also have */
let biggie = arr => arr.findIndex(function (el) { return el > 20; })

console.log("element is " + bigger(array1));
