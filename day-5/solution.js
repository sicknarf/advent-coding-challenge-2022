const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")

let baseIdx = 0

for(let i = 0; i < input.length; i++){
    if (parseInt(input[i])===1){
        baseIdx = i
    }
}

const baseArray = input[baseIdx].split('   ').map(i=>parseInt(i))
const baseObject = baseArray.reduce((accumulator, value) => {
    return {...accumulator, [value]: []};
  }, {})


for(let i = baseIdx-1; i >= 0; i--){
    for(let j = 1; j < (4*Object.keys(baseObject).length); j+=4){
        if(input[i][j] !== ' '){
            baseObject[parseInt(input[baseIdx][j])].push(input[i][j])
        }
    }
}

console.log(baseObject)
