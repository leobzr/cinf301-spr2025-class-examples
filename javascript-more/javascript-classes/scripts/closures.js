/*
 * See:
 *      https://medium.com/@vapurrmaid/should-you-use-classes-in-javascript-82f3b3df6195
 * and
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * 
 */

/*
 * makeAdder() is a function "factory" that creates functions with their
 * "lexical environment" included (i.e. since x has a value when function(y)
 * is created, the value of x is preserved in function).
 */
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

// add5 and add10 are both closures
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

//----------------------------------------
// Below, the public (returned) functions increment(), decrement(),
// and value() share the same lexical environment of the variable
// privateCounter and function changeBy()
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    }
  }
};

// Each of these gets its own lexical environment
var counter1 = makeCounter();
var counter2 = makeCounter();

alert(counter1.value());  // 0.

counter1.increment();
counter1.increment();
alert(counter1.value()); // 2.

counter1.decrement();
alert(counter1.value()); // 1.
alert(counter2.value()); // 0.

//----------------------------------------
// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

/*
 * Note that above line is equivalent to:
 */
var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20
