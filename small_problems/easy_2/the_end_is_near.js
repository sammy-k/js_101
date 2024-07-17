const penultimate = (words) => {
  let wordArray = words.split(' ');
  return wordArray[wordArray.length - 2];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
