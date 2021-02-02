const loopyLighthouse = function(range,multiples,words) {
  for (let number = range[0]; number <= range[1]; number ++) {
    
    let output = "";

    if (number % multiples[0] === 0) {
      output += words[0];
    }
    if (number % multiples[1] === 0) {
      output += words[1];
    }

    if (output === "") {
      output = number;
    }

    console.log(output);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

