const readlineSync = require('readline-sync');

const length = parseFloat(readlineSync.question('Enter the length of the room in meters: '));

const width = parseFloat(readlineSync.question('Enter the width of the room in meters: '));

const areaInSquareMeters = length * width;
const areaInSquareFeet = areaInSquareMeters * 10.7639;

console.log(`The area of the room is ${areaInSquareMeters} square meters (${areaInSquareFeet} square feet).`);



