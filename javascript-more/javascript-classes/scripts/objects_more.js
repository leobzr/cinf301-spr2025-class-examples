/*
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
 *   - section on Custom Objects
 *
 * A little dated since says no "class" keyword, that functions serve as classes
 * Since ES6, have "class" keyword, but below describes important details about
 * the scope and binding of "this" and how functions can serve as classes
 */

/*
 * Since a function is an object, can have attributes that include other functions
 */
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"

// versus

var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined

/*
 * Since a function is an object, can have attributes that include other functions
 */
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
}
/*
 * "new" binds the "this" to the newly formed Object
 * Take out "this" from each line above in Person(), then create Object
 * with "new" below, fails.
 *
 * BUT fullName() and fullNameReversed() are created for each instance
 */
var s = new Person('Simon', 'Willison');

//--------------------

/*
 * The following creates the personFullName() and personFullNameReversed()
 * each once, and references the two functions from each Object
 */
function personFullName() {
  return this.first + ' ' + this.last;
}
function personFullNameReversed() {
  return this.last + ', ' + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}

/*
 * "Prototypes" were created to formalize this, with the prototype being
 * shared with all instances of the object
 *
 * ALSO, can add new prototypes to functions
 */
 function Person(first, last) {
  this.first = first;
  this.last = last;
 }
 Person.prototype.fullName = function() {
   return this.first + ' ' + this.last;
 };
 Person.prototype.fullNameReversed = function() {
   return this.last + ', ' + this.first;
 };

 var s = new Person('Simon', 'Willison');
 s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

 Person.prototype.firstNameCaps = function() {
   return this.first.toUpperCase();
 };
 s.firstNameCaps(); // "SIMON"

 /*
  * You can add a prototype even to things like String literals!
  */

  var s = 'Simon';
  s.reversed(); // TypeError on line 1: s.reversed is not a function

  String.prototype.reversed = function() {
    var r = '';
    for (var i = this.length - 1; i >= 0; i--) {
      r += this[i];
    }
    return r;
  };

  // A better way using arrays! Note that because the arrow function
  // does not have its own "this", it will use the "this" of the
  // surrounding function; in this case, the prototype function
  // itself. 
  String.prototype.reversed = function() {
    return ((s) => s.split('').reverse().join(''))(this);
  };

  s.reversed(); // nomiS
