const crunch = (str) => {
  let cleanStr = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] !== str[idx - 1]) {
      cleanStr += str[idx];
    }
  }
  return cleanStr;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""