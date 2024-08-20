const cleanStr = (str) => {
  const regex = /^[A-Za-z\s]+$/;
  return str.split('').map((char) => {
    if (regex.test(char)) {
      return char;
    }
  }).join('');
};

console.log(cleanStr("What's up doc?"));

const wordSizes = (str) => {
  if (str.length === 0) return {};
  let cleaned = cleanStr(str);
  let letters = {};
  cleaned.split(' ').forEach((word) => {
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