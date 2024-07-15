const readlineSync = require('readline-sync');

const bill = parseFloat(readlineSync.question('What is the bill? '));
const tipPercent = parseFloat(readlineSync.question('What is the tip percentage? ')) / 100;

const tip = bill * tipPercent;
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);