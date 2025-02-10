/*
 * Array prototypes see (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * 
 * To understand prototypes, see (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
 */
var tags = document.getElementsByTagName('h1');
var tagList = Array.prototype.slice.call(tags);
tagList.forEach(val => console.log(val));

// Goto to any site: e.g. www.stetson.edu
var a_tags = document.getElementsByTagName('a');
var tagList = Array.prototype.slice.call(a_tags);
tagList.forEach(function (val) { val.href = "http://example.com" });

// One other way to do the above without anonymous function in "callback"
function hack(elem) {
  return elem.href = "http://example.com";
}
tagList.forEach(hack);

// can you do this with an arrow function in one line?