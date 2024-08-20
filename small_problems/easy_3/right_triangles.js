const triangle = (num) => {
  let star = '';
  let line = ' '.repeat(num);
  while (num >= 0) {
    console.log(line + star);
    num -= 1;
    star += '*';
    line = line.slice(1);
  }
};

// another solution
// const triangle = (num) => {
//   let tri = '';
//   for (let count = 1; count <= num; count += 1) {
//     tri += ' '.repeat(num - count);
//     tri += '*'.repeat(count);
//     tri += '\n';
//   }
//   return tri;
// };

console.log(triangle(5));
//
//     *
//    **
//   ***
//  ****
// *****

console.log(triangle(9));
//
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********