const logInBox = (str) => {
  let boxBorder = '--';
  let padding = '  ';
  for (let num = str.length; num > 0; num -= 1) {
    boxBorder += '-';
    padding += ' ';
  }
  let boxStatement = `+${boxBorder}+\n|${padding}|\n| ${str} |\n|${padding}|\n+${boxBorder}+`;
  console.log(boxStatement);
};

// another solution
// const logInBox = (str) => {
//   let border = `+${'-'.repeat(str.length + 2)}+`;
//   let padding = `|${' '.repeat(str.length + 2)}|`;
//   return `${border}\n${padding}\n| ${str} |\n${padding}\n${border}`;
// };

console.log(logInBox(''));
// +--+
// |  |
// |  |
// |  |
// +--+

console.log(logInBox('To boldly go where no one has gone before.'));
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+