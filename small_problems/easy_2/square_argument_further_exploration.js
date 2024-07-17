const multiply = (num1, num2) => num1 * num2;
const square = (num, power) => {
  let total = num;
  while (power >= 2) {
    total = multiply(total, num);
    power -= 1;
  }
  return total;
};

console.log(square(5, 4) === 625); // true
console.log(square(2, 5) === 32); // true
console.log(square(1, 20) === 1); // true