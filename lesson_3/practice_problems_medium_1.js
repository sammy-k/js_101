// Question 1
const flintstonesRock = () => {
  let message = 'The Flintstones Rock!';
  let space = ' ';
  for (let idx = 1; idx <= 10; idx += 1) {
    console.log(message);
    message = space + message;
  }
};

console.log(flintstonesRock());