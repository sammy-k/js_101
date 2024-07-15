// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

const isLeapYear = (year) => {
  // if year is between 0 and 1751: every year divisible by 4
  if (year <= 1751) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
  // if year is greater or equal to 1752:
  if (year >= 1752) {
     // if year is divisible by 4 and divisible by 400
     if (year % 4 === 0 && year % 400 === 0) {
      return true;
     // if year is evenly divisible by 4 and not divisble by 100
     } else if (year % 4 === 0 && !(year % 100 === 0)) {
      return true;
     } else {
      return false;
     }
  }
   
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true