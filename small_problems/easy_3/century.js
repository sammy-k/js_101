const century = (year) => {
  let centuryYear = year % 100 === 0 ? year / 100 : Math.ceil(year / 100);
  let centuryYearString = String(centuryYear);
  if (centuryYear !== 11 && centuryYearString.slice(centuryYearString.length - 1) === '1') {
    centuryYearString += 'st';
  } else if (centuryYear !== 12 && centuryYearString.slice(centuryYearString.length - 1) === '2') {
    centuryYearString += 'nd';
  } else if (centuryYear !== 13 && centuryYearString.slice(centuryYearString.length - 1) === '3') {
    centuryYearString += 'rd';
  } else {
    centuryYearString += 'th';
  }
  return centuryYearString;
};

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"