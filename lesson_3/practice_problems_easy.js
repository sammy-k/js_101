// NOTE: numbered questions not included here didn't require any code testing
// Question 2
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// const endsWithBang = (str) => str[str.length - 1] === '!';

// console.log(endsWithBang(str1));
// console.log(endsWithBang(str2));

// Question 3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty('Herman'));
// console.log(ages.hasOwnProperty('Spot'));

// Question 4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// let properCase = munstersDescription.split(' ').map((word, idx) => {
//   if (idx === 0) {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   } else {
//     return word.toLowerCase();
//   }
// }).join(' ');
// console.log(properCase);

// Question 6
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges);
// console.log(ages);

// Question 7
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// Question 9
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino', 'Hoppy');
// console.log(flintstones);

// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.slice(0, advice.indexOf('house'));
console.log(newAdvice);
