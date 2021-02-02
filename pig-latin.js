const args = process.argv.slice(2);

const pigLatin = function(args) {
  let newStrings = [];
  for (let i = 0; i < args.length; i++) {
    let newString = "";
    for (let j = 0; j < args[i].length; j++) {
      if (j === 0) {
        j++;
      }
      newString += args[i][j];
    }
    newString += args[i][0] + 'ay';
    newStrings.push(newString);
  }
  return newStrings.join(" ");
};

console.log(pigLatin(args));