const swap = (str) => {
  let swapped = [];
  str.split(' ').forEach((word) => {
    if (word.length <= 1) {
      swapped.push(word);
    } else {
      let firstChar = word.slice(word.length - 1);
      let middle = word.slice(1, word.length - 1);
      let lastChar = word.slice(0, 1);
      let newWord = firstChar + middle + lastChar;
      swapped.push(newWord);
    }
  });
  return swapped.join(' ');
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"