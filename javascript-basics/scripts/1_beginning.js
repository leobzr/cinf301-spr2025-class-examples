/*
 * Basic Javascript stuff
 *
 * DEFINITELY GO OVER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
 */

// paste each of these below (in chunks) in browser, see their values
var val1 = isNaN("hello");
var val2 = isNaN(4);
var val3 = isFinite(100);
var val4 = isFinite(null);

// Operators
var x = 3;
x += 7;

'abc' + 'def';

1 + 2 + 3;
'1' + 2 + 3;
1 + 2 + '3';

5 == 5;
5 == '5';
5 === '5';

5 == true;
1 == true;
1 === true;

// Arrays
var arr = [1, 5, 7, 3, 99];

for (el of arr) {
  console.log(el);
}

var a = ['dog', 'cat', 'hen'];
a[10] = 'fox';
a.length; // 11
console.log(a.toString());

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

let array = [];
for (let i = 0; i < 5; i++) {
  array.push(i + 100);
}

// Objects
// See for object basics:  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics

// paste in browser
let object = {};
for (let i = 0; i < 5; i++) {
  object['value' + i] = i;
}
// Try 'value0', 1, 'value6', value0
var prop = object.hasOwnProperty('value0');

// paste in browser
function avg(...vals) {
  var sum = 0;
  for (let value of vals) {
    sum += value;
  }
  return sum / vals.length;
}
console.log("Average = " + avg(2, 3, 4, 5));

// paste in browser
function adder(...values) {
  let sum = 0;
  let str = 'sum of ';
  for (let value of values) {
    str += value;
    str += ', ';
    sum += value;
  }

  /*
   * Strip off ending ', '
   * Or could do this with:
   *   str = str.slice(0, -2);
   *
   * Difference: https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
   */
  str = str.substring(0, str.length - 2);
  return str + " = " + sum;
}
console.log(adder(4, 4, 4));