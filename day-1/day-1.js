const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const textByLine = text.split("\n")

console.log(textByLine)

