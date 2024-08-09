// const penultimate = (words) => {
//   let wordArray = words.split(' ');
//   return wordArray[wordArray.length - 2];
// };

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true


// further exploration

const middleWord = (words) => {
  let wordArray = words.split(' ');
  return wordArray[Math.floor(wordArray.length / 2)];
};

console.log(middleWord("my last word")); // last
console.log(middleWord("Launch School is great!")); // is
