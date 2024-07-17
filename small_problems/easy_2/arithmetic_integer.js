const readline = require('readline-sync');

const prompt = (message) => {
  console.log(`=> ${message}`);
};

prompt('Enter the first number: ');
let firstNumber = readline.question();
prompt('Enter the second number: ');
let secondNumber = readline.question();

console.log(prompt(`${firstNumber} + ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)}`));
console.log(prompt(`${firstNumber} - ${secondNumber} = ${Number(firstNumber) - Number(secondNumber)}`));
console.log(prompt(`${firstNumber} * ${secondNumber} = ${Number(firstNumber) * Number(secondNumber)}`));
console.log(prompt(`${firstNumber} / ${secondNumber} = ${Number(firstNumber) / Number(secondNumber)}`));
console.log(prompt(`${firstNumber} % ${secondNumber} = ${Number(firstNumber) % Number(secondNumber)}`));
console.log(prompt(`${firstNumber} ** ${secondNumber} = ${Number(firstNumber) ** Number(secondNumber)}`));