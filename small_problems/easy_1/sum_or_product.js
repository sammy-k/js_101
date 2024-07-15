const readlineSync = require('readline-sync');

let integer = parseInt(readlineSync.question(`Please enter an integer greater than 0: `));
while (integer <= 0) {
  integer = parseInt(readlineSync.question(`Please enter an integer greater than 0: `));
  };
  
let sumOrProduct = readlineSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);
while (sumOrProduct !== 's' && sumOrProduct !== 'p') {
  sumOrProduct = readlineSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);
}

let product = (num) => total *= num;
let sum = (num) => total += num;
let total;
sumOrProduct === 's' ? total = 0 : total = 1;

for (let i = 1; i <= integer; i += 1) {
  if (sumOrProduct === 's') {
    sum(i); 
  } else if (sumOrProduct === 'p') {
    product(i);
  }
}

console.log(`The ${sumOrProduct === 's' ? 'sum' : 'product'} of the integers between 1 and ${integer} is ${total}`);