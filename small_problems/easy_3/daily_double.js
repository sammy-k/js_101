const crunch = (str) => {
  let crunchedStr = str;
  for (let idx = 0; idx < crunchedStr.length; idx += 1) {
    let currentChar = crunchedStr[idx];
    for (let j = idx + 1; j < crunchedStr.length; j += 1) {
      if (currentChar === crunchedStr[j]) {
        
      }
    }

  }
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""