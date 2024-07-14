// SOLUTION 1

// let num = 1;
// while (num <= 99) {
//   console.log(num);
//   num += 2;
// }

// FURTHER EXPLORATION: SOLUTION 2

const logOddsToNinetyNine = (num) => {
  if (num > 99) {
    console.log('your number is bigger than 99');
  }
  else {
    for (num; num <= 99; num += 1) {
      if (num % 2 === 1) {
        console.log(num);
      }
    }
  }
}

// console.log(logOddsToNinetyNine(0))
// console.log(logOddsToNinetyNine(100))
// console.log(logOddsToNinetyNine(50))
// console.log(logOddsToNinetyNine(67))