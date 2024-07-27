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

triangle(5);
//
//     *
//    **
//   ***
//  ****
// *****

triangle(9);
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