const fs = require("fs");

let passwordsCount = 0;

let passwordsFile = fs.readFileSync("passwords.txt", "utf8");
let passwords = passwordsFile.split("\n");
passwords.pop("");

//part 1

passwords.forEach((password, i, arr) => {
  arr[i] = password.split(" ");
  arr[i][0] = arr[i][0].split("-");
  let low = arr[i][0][0];
  let high = arr[i][0][1];
  let letter = arr[i][1].replace(":", "");
  let passwordToCheck = arr[i][2].split("");
  let count = 0;
  passwordToCheck.forEach((currentLetter) => {
    if (currentLetter === letter) {
      count++;
    }
  });
  if (count >= low && count <= high) {
    passwordsCount++;
  }
});

// part 2

passwords.forEach((password, i, arr) => {
  arr[i] = password.split(" ");
  arr[i][0] = arr[i][0].split("-");
  let low = parseInt(arr[i][0][0]) - 1;
  let high = parseInt(arr[i][0][1]) - 1;
  let letter = arr[i][1].replace(":", "");
  let passwordToCheck = arr[i][2].split("");
  let count = 0;
  if (
    (passwordToCheck[low] === letter && passwordToCheck[high] !== letter) ||
    (passwordToCheck[low] !== letter && passwordToCheck[high] === letter)
  ) {
    passwordsCount++;
  }
});

console.log(passwordsCount);
