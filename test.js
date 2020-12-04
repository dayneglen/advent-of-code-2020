const fs = require("fs");

let numbers = fs.readFileSync("input.txt", "utf8");
let numbersByLine = numbers.split("\n");
numbersByLine.pop();
numbersByLine.forEach((number, i, arr) => {
  arr[i] = parseInt(number);
});
let numberSet = {};

// numbersByLine.forEach((number) => {
//   for (let key in numberSet) {
//     console.log(key);
//     if (key + number === 2020) {
//       console.log("hit");
//     } else {
//       numberSet[number] = true;
//     }
//   }
// });

for (let i = 0; i < numbersByLine.length; i++) {
  for (let j = 1; j < numbersByLine.length; j++) {
    for (let k = 2; k < numbersByLine.length; k++) {
      if (numbersByLine[i] + numbersByLine[j] + numbersByLine[k] === 2020) {
        console.log(numbersByLine[i] * numbersByLine[j] * numbersByLine[k]);
      }
    }
  }
}
