// myVariable is *not* visible out here if declared with 'let'
console.log(myVariable);

// change 'let' and 'var' to see effect of block declaration
for (let myVariable = 0; myVariable < 5; myVariable++) {
  // myVariable is always visible in here
  console.log(myVariable);
}

// myVariable is *not* visible out here if declared with 'let'
console.log(myVariable);
