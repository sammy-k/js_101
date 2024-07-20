const stringy = (num) => {
  let numString = '';
  for (let idx = 0; idx < num; idx += 1) {
    if (idx % 2 === 0) {
      numString += '1';
    } else {
      numString += '0';
    }
  }
  return numString;
};

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
