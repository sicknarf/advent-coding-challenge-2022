const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")

console.log(isNaN(parseInt(input[0])))
console.log(isNaN(parseInt(input[3])))
console.log(parseInt(input[3]))

function firstWord(n){
    const myArr = n.split(' ')
    return myArr[0]
}