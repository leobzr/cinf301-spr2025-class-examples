/* https://www.w3docs.com/snippets/javascript/javascript-bind-vs-apply-and-call.html */

let p1 = {
    firstName: 'John',
    lastName: 'Smith'
};
let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
};
function sayWelcome(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

// Call being used
sayWelcome.call(p1, 'Welcome'); // Welcome John Smith
sayWelcome.call(p2, 'Welcome'); // Welcome Ann Brown

// Apply being used (like call, but pass in an array)
sayWelcome.apply(p1, ['Welcome']); // Welcome John Smith
sayWelcome.apply(p2, ['Welcome']); // Welcome Ann Brown

// Bind being called
let sayWelcomeJohn = sayWelcome.bind(p1);
let sayWelcomeAnn = sayWelcome.bind(p2);
sayWelcomeJohn("Hey"); // Welcome John Smith
sayWelcomeAnn("Hey"); // Welcome Ann Brown