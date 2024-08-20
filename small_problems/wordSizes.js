const wordSizes = (str) => {
  if (str.length === 0) return {};
  let letters = {};
  str.split(' ').forEach((word) => {
    if (letters.hasOwnProperty(word.length)) {
      letters[word.length] += 1;
    } else {
      letters[word.length] = 1;
    }
  });
  return letters;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}