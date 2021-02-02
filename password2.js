let pw = process.argv[2];

let changePassword = function(password) {
  let newPw = "";
  for (let i = 0; i < password.length; i++) {
    
    if (password[i] === "a") {
      newPw += "4";
      continue;
    }
    if (password[i] === "e") {
      newPw += "3";
      continue;
    }
    if (password[i] === "o") {
      newPw += "0";
      continue;
    }
    if (password[i] === "l") {
      newPw += "1";
      continue;
    }
    newPw += password[i];

  }
  return newPw;
};

console.log(changePassword(pw));