const isPalindrome = str => str === str.split('').reverse().join('');

const isRealPalindrome = str => {
  const regex = /^[A-Za-z0-9]$/;
  let cleanStr = '';
  str.split('').forEach((char) => {
    if (regex.test(char)) {
      cleanStr += char;
    }
  });
  return isPalindrome(cleanStr.toLowerCase());
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false