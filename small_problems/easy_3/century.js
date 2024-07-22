const century = (year) => { // NOTE: year is a string
  let centuryNum = Math.ceil(year / 100).toString();
  // take account of all last numbers 
  if ()
  if ([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].includes(Number(centuryNum))) {
    return centuryNum += 'th';
  }
};

console.log(century(2000));        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"