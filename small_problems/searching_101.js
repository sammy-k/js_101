const readline = require('readline-sync');

let numbers = [];

const firstNum = readline.question('Enter the 1st number: ');
numbers.push(Number(firstNum));

const secondNum = readline.question('Enter the 2nd number: ');
numbers.push(Number(secondNum));

const thirdNum = readline.question('Enter the 3rd number: ');
numbers.push(Number(thirdNum));

const fourthNum = readline.question('Enter the 4th number: ');
numbers.push(Number(fourthNum));

const fifthNum = readline.question('Enter the 5th number: ');
numbers.push(Number(fifthNum));

const lastNum = readline.question('Enter the last number: ');

console.log(numbers.includes(Number(lastNum)) ?
  `The number ${lastNum} appears in ${numbers.join(',')}.` :
  `The number ${lastNum} does not appear in ${numbers.join(',')}.`
);