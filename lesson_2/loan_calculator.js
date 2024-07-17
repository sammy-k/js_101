const readline = require('readline-sync');

const prompt = (message) => {
  console.log(`=> ${message}`);
};

const invalidNumber = (number) => {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

prompt('Welcome to the mortgage calculator!');

prompt("What's your loan amount?");
let loanAmount = readline.question();
while (invalidNumber(loanAmount)) {
  prompt("Hmm... that doesn't look like a valid number.");
  loanAmount = readline.question();
}
loanAmount = Number(loanAmount).toFixed(2);
console.log(`Your loan amount is $${loanAmount}`);

prompt("What is your APR (Annual Percentage Rate)?");
let annualPercentageRate = readline.question();
while (invalidNumber(annualPercentageRate)) {
  prompt("Hmm... that doesn't look like a valid number.");
  annualPercentageRate = readline.question();
}
console.log(`Your APR  is ${annualPercentageRate}%`);
annualPercentageRate = (Number(annualPercentageRate) / 100).toFixed(2);
let monthlyRate = (annualPercentageRate / 12);

prompt("What is the duration of your loan in years?");
let loanDurationYears = readline.question();
while (invalidNumber(loanDurationYears)) {
  prompt("Hmm... that doesn't look like a valid number.");
  loanDurationYears = readline.question();
}

let loanDurationMonths = (Number(loanDurationYears) * 12);
console.log(`Your loan is for ${loanDurationYears} years (${loanDurationMonths} months)`);

let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));

prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

