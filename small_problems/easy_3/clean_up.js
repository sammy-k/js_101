const cleanUp = (str) => {
  const regex = /[A-Za-z]/;
  let cleanWord = str.split('').map(char => {
    return regex.test(char) ? char : ' ';
  });
  return cleanWord.join('').replace(/\s+/g, ' ');
};

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "