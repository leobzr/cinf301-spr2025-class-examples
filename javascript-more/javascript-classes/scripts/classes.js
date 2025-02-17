/*
 * Functions with prototypes and use of the "new" and "this" keywords
 * act like classes
 *
 * The below is from "objects_more.js"
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
  * Classes follow the more typical format use in other languages, but
  * note that beneath the covers, a class ultimately is an object with
  * its prototypes, so the functions are not encapsulated methods of
  * the class.
  *
  * The above is written as the following, both being equivalent.
  */

  class Person {
    constructor (first, last) {
      this.first = first;
      this.last = last;
      this.fullName = this.fullName.bind(this);
    }
    fullName() {
      return this.first + ' ' + this.last;
    }
    fullReversedName() {
      return this.last + ' ' + this.first;
    }
    firstNameCaps() {
      return this.first.toUpperCase();
    }
  }

  /*
   * Since functions are not encapsulated methods, this is really
   * confusing and leads (below) to unexpected results.
   *
   * Here, obj.full() looks for 'first' and 'last' in 'obj' rather
   * than in 's'.
   *
   * To get around this, must include "this.fullName = this.fullName.bind(this);"
   * in the constructor to "bind" this in the object to fullName.  Could do this
   * with all of the methods.  Some call this "class bind Hell!"
   */
  var s = new Person('Simon', 'Willison');
  const obj = {};
  obj.full = s.fullName;
  obj.full();
