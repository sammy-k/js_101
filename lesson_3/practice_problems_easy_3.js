// Question 1
let numbers = [1, 2, 3, 4];

// Method 1
// while (numbers.length > 0) {
//   numbers.pop();
// }

// Method 2
// while (numbers.length > 0) {
//   numbers.shift();
// }

// Method 3
numbers = numbers.slice(numbers.length);
console.log('numbers array: ', numbers);
