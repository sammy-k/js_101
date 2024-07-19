// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replaceAll('important', 'urgent');
console.log(newAdvice);

// Question 2

let numbers = [1, 2, 3, 4, 5];

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
let reversedNumbers = numbers.reverse();
console.log(numbers);
console.log(reversedNumbers);