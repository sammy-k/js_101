const xor = (elem1, elem2) => {
  if (!!(elem1) === true && !!(elem2) === false) {
    return true;
  } else if (!!(elem1) === false && !!(elem2) === true) {
    return true;
  } else {
    return false;
  }
};

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true