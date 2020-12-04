const fs = require("fs");

let pathFile = fs.readFileSync("trees.txt", "utf8");
let path = pathFile.split("\n");
path.pop();

let treesEncountered = 0;
let currentSpot = 1;
for (let i = 1; i < path.length; i++) {
  if (currentSpot + 3 <= 31) {
    currentSpot += 3;
  } else {
    currentSpot = currentSpot + 3 - 31;
  }
  const currentPath = path[i].split("");
  if (currentPath[currentSpot - 1] === "#") {
    treesEncountered++;
  }
}

console.log(treesEncountered);
