// Question 1
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let newAdvice = advice.replaceAll('important', 'urgent');
// console.log(newAdvice);

// Question 2 ***COME BACK TO THIS ONE***

// let numbers = [1, 2, 3, 4, 5];

// Method 1
// const reverseArr = (arr) => {
//   let reversedArr = [];
//   for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
//     reversedArr.push(arr[idx]);
//   }
//   return reversedArr;
// };

// let reversedNumbers = reverseArr(numbers);
// console.log(numbers);
// console.log(reversedNumbers);

// Method 2
// let reversedNumbers = numbers.reverse();
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


// Question 6  **COME BACK TO THIS ONE***
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// flintstones = [].concat(...flintstones);
// console.log(flintstones);


// Question 7  *** COME BACK TO THIS ONE ***
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

const findBarney = (obj) => {
  let barney = [];
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'Barney') {
      barney.push(key, value);
    }
  }
  return barney;
};
console.log(findBarney(flintstones));


