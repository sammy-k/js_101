// Question 1
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let newAdvice = advice.replaceAll('important', 'urgent');
// console.log(newAdvice);

// Question 2

// let numbers = [1, 2, 3, 4, 5];

// Method 1 using reverse
// let reversedNumbers = numbers.slice(0).reverse();
// console.log(numbers);
// console.log(reversedNumbers);

// Method 2 using sort
// let reversedNumbers = numbers.slice(0).sort((num1, num2) => num2 - num1);
// console.log(numbers);
// console.log(reversedNumbers);

// Method 3 using forEach
// let reversedNumbers = [];
// numbers.forEach(num => {
//   reversedNumbers.unshift(num);
// });

// console.log(numbers);
// console.log(reversedNumbers);


// Question 3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true
// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// Question 4 ***COME BACK TO THIS ONE***
// let famousWords = "seven years ago...";

// // Method 1
// famousWords = famousWords.split(' ').splice(0, 0, 'Four score and ').join(' ');
// console.log(famousWords);


// Question 5
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1);
// console.log(numbers);


// Question 6
// let flintstones = ["Fred", "Wilma"];

// let flintstonesEach = [];

// flintstones.concat(['Barney', 'Betty'], ['Bambam', 'Pebbles']).forEach(elem => {
//   flintstonesEach.push(elem);
// });

// console.log(flintstones);
// console.log(flintstonesEach);


// Question 7
let flintstones =
{ Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

const justBarney = (obj) => {
  let barney = [];
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'Barney') {
      barney.push(key, value);
    }
  }
  return barney;
};

console.log(justBarney(flintstones));
