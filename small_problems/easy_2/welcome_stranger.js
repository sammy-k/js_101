const greetings = (arr, obj) => `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`;

// solution using reduce on the array
// const greetings = (arr, obj) => {
//   return `Hello, ${arr.reduce((accum, str) => `${accum} ${str}`)}! Nice to have a ${obj.title} ${obj.occupation} around.`;
// };

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.