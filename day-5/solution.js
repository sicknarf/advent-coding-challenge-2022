const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")

let baseIdx = 0
const solutionArray = []

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

for(let i = baseIdx+2; i < input.length; i++){
    let instructions = input[i].split(' ')
    let fromStack = parseInt(instructions[3])
    let toStack = parseInt(instructions[5])
    // j is the qty stack
    for(let j = 0; j < parseInt(instructions[1]); j++){
        baseObject[toStack].push(baseObject[fromStack].pop())
    }

}

for(let i = 1; i <= Object.keys(baseObject).length; i++){
    solutionArray.push(baseObject[i][baseObject[i].length-1])
}

console.log(`After moving all the boxes around, the top of each stack spelled out ${solutionArray.join('')}`)
