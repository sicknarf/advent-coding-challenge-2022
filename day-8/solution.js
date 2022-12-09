const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
const input = text.split("\n");

let forest = input.map(x=> x.split(''))

console.log(forest)