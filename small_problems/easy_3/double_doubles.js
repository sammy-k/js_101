const twice = (num) => {
  let numString = String(num);
  if (numString.length % 2 === 1) return num * 2;

  let firstHalf = numString.slice(0, numString.length / 2);
  let secondHalf = numString.slice(numString.length / 2);

  if (firstHalf === secondHalf) {
    return num;
  } else {
    return num * 2;
  }
};

// another solution
// const twice = (num) => {
//   let numString = String(num);
//   if (numString.length % 2 === 0) {
//     if (numString.slice(0, numString.length / 2) === numString.slice(numString.length / 2)) {
//       return num;
//     }
//   }
//   return num * 2;
// };

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676