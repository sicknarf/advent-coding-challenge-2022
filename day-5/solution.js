const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")

let crateBase = 0

for(let i = 0; i < input.length; i++){
    if (parseInt(input[i])===1){
        crateBase = i
    }
}

const baseArray = input[crateBase].split('   ')

console.log(baseArray)

// {
// 1: [array], 
// 2: [array],
// 3: [array],
// 4: [array],
// 5: [array],
// 6: [array],
// 7: [array],
// 8: [array],
// 9: [array],
// }

