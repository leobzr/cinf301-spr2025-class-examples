/*
 * You'll see a lot of this notation in react and other places.
 * "export" vs "export default"
 * 
 * if parent.js exports default (with "subtract" not in braces), 
 * and imports "subtract" here without braces, can call anything
 * you want here (e.g. "minus" instead of "subtract"); can do this
 * because "export default" means you only export a single function
 * and so no ambiguity in naming it elsewhere (e.g. here), and the
 * exported value's name is "default".  Named exports use {}, and 
 * can use "default" as a named export as well using braces.
 */
import minus from './parent.js';
import { addition } from './parent.js';

// Or treat as a named export and import as name of choice.
// import {default as minus} from './parent.js';

let buttonPushed = document.querySelector('button');

buttonPushed.addEventListener('click', () => {
  let first = parseFloat(document.getElementById('first').value);
  let second = parseFloat(document.getElementById('second').value);

  const solutions = document.createElement('div');
  solutions.className = 'solutions';
  let node = document.createElement('p');
  node.innerHTML = "difference: " + minus(first, second);
  solutions.appendChild(node);
  document.body.insertBefore(solutions, document.getElementById('solutions'));
});
