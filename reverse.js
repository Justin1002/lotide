const args = process.argv.slice(2);

const reverse = function(args) {
  let newStrings = [];
  for (let i = 0; i < args.length; i++) {
    let newString = "";
    for (let j = args[i].length - 1; j >= 0; j--) {
      newString += args[i][j];
    }
    console.log(newString);
    newStrings.push(newString);
  }
  return newStrings;
};

reverse(args)
