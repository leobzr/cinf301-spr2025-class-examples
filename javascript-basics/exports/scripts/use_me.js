/*
 * You'll see a lot of this notation in react and other places.
 */
import { add, subtract, mult, pi } from './parent.js';

/*
 * See: https://javascript.info/modifying-document
 */

let buttonPushed = document.querySelector('button');

buttonPushed.addEventListener('click', () => {
  let first = parseFloat(document.getElementById('first').value);
  let second = parseFloat(document.getElementById('second').value);

  const solutions = document.createElement('div');
  solutions.className = 'solutions';
  let node1 = document.createElement('p');
  node1.innerHTML = "pi: " + pi;
  node1.className = 'line other';
  solutions.append(node1);
  let node2 = document.createElement('p');
  node2.innerHTML = "sum: " + add(first, second);
  solutions.appendChild(node2);
  let node3 = document.createElement('p');
  node3.innerHTML = "mult: " + mult(first, second);
  solutions.appendChild(node3);
  document.body.insertBefore(solutions, document.getElementById('solutions'));
});

// buttonPushed.addEventListener('click', () => {
//   let first = parseFloat(document.getElementById('first').value);
//   let second = parseFloat(document.getElementById('second').value);

//   /*
//    * This could also be data fetched from another site or gotten
//    * from a database.
//    */
//   let list_items = {
//     pi: pi,
//     sum: add(first, second),
//     subtract: subtract(first, second),
//     mult: mult(first, second)
//   }

//   for (var key in list_items) {
//     if (list_items.hasOwnProperty(key)) {
//       let elem = document.createElement('li');
//       elem.className = 'solutions';
//       elem.innerHTML = key + ": " + list_items[key];
//       solutions.append(elem);
//     }
//   }
// });
