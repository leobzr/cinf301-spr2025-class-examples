console.log(myValue);

/*
 * In Javascript (unlike Java and others), functions do not have scope.
 * Use 'let' and 'const' to provide block scope, since 'var' is global.
 */

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        // Change between 'var' and 'let' to see scope difference
        var myValue = index;
        console.log(myValue);
    }
}

console.log(myValue);
