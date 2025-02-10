/*
 * See: https://www.digitalocean.com/community/conceptual_articles/understanding-this-bind-call-and-apply-in-javascript
 */

// Our data to work with: book, book2, other
const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

const book2 = {
  title: 'Sam I Am',
  author: 'Dr. Suess',
  description: 'Fun book',
}

const other = {
  stuff: 'Not title, author, description'
}

function summary() {
  // ${this.title} in backtics are "template literals"
  console.log(`${this.title} was written by ${this.author}.`)
  //console.log(`Other: ${this.other}, Description: ${this.description}`)
}

summary();              // has no connection from summary to book
summary.call(book);     // one-time method to pass book to summary
summary.apply(book);    // one-time method to pass book to summary also

function printThis() {
  console.log(this);
}
printThis.call(book);
printThis.apply(book);

printThis.call(book2);
printThis.apply(book2);
printThis.call(other)

function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  )
}
// apply() works with arrays rather than list of arguments
longerSummary.call(book, 'dystopian', 1932);
longerSummary.apply(book, 'dystopian', 1932); // type errors
longerSummary.apply(book, ['dystopian', 1932]); // No type errors

// binding is permanent
// NOTE: uncomment second console.log() in summary() first
const summarybind = summary.bind(book)
const summarybind2 = summary.bind(book2)
const summarybind3 = summary.bind(other)

// bind doesn't work like apply with arrays
const newlong = longerSummary.bind(book, 'dystopian', 1932);
const newlong2 = longerSummary.bind(book, ['dystopian', 1932]);

// can also bind functions in objects
const book3 = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
  writing: function(pages) {
    console.log(`${this.title} was written by ${this.author} writing ${pages} pages.`)
  }
}
const writes = book3.writing.bind(book, 2000);

// arrow functions in classes or objects bind to the outer context
var name = 'Your Name';
const whoAmI = {
  name: 'Leslie Knope',
  regularFunction: function() {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

whoAmI.regularFunction(); // "Leslie Knope"
whoAmI.arrowFunction(); // Your Name
