const negative = (num) => {
  if (num === 0) {
    return -0;
  } else if (num < 0) {
    return num;
  } else if (num > 0) {
    return num - (num * 2);
  }
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0