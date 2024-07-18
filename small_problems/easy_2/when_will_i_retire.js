const readline = require('readline-sync');

const prompt = (message) => {
  console.log(`=> ${message}`);
};

let age = readline.question(prompt('What is your age? '));
let retirementAge = readline.question(prompt('At what age would you like to retire? '));

const currentYear = new Date().getFullYear();
console.log(`It's ${currentYear}. You will retire in ${currentYear + (retirementAge - age)}.\nYou have only ${retirementAge - age} years of work to go!`);
