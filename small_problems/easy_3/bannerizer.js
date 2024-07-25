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