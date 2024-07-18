const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let yourScore = 0;
let computerScore = 0;

while (true) {
  while (yourScore < 3 && computerScore < 3) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt(`That's not a valid choice`);
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    if ((choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')) {
      prompt('You scored!');
      yourScore += 1;
    } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
      prompt('Computer scored!');
      computerScore += 1;
    } else {
      prompt(`It's a tie`);
    }

    console.log(`The current score is you: ${yourScore}, computer: ${computerScore} `);

    if (yourScore === 3) {
      console.log(`You win!`);
    }
    if (computerScore === 3) {
      console.log(`Computer wins!`);
    }
  }

  yourScore = 0;
  computerScore = 0;

  prompt(`Do you want to play again (y/n)?`);
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(`Please enter "y" or "n".`);
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}

