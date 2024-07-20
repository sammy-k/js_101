const triangle = (num) => {
  let rightTriangle = '';
  let lineCount = num;
  while (lineCount > 0) {
    for (let idx = 0; idx < num; idx += 1) {
      idx === num - 1 ? rightTriangle += '*' : rightTriangle += ' ';
    }
    rightTriangle += '\n';
    lineCount -= 1;
  }
  return rightTriangle;
};


console.log(triangle(5));

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********