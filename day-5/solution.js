const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")
const input2 = text.split("\n")


// setup
let baseIdx = 0
const pt1SolutionArray = []
const pt2SolutionArray = []

for(let i = 0; i < input.length; i++){
    if (parseInt(input[i])===1){
        baseIdx = i
    }
}

const baseArray = input[baseIdx].split('   ').map(i=>parseInt(i))
const baseObject = baseArray.reduce((accumulator, value) => {
    return {...accumulator, [value]: []};
  }, {})

const baseArray2 = input2[baseIdx].split('   ').map(i=>parseInt(i))
const pt2Object = baseArray2.reduce((accumulator, value) => {
    return {...accumulator, [value]: []};
  }, {})


// const pt2Object = baseObject

for(let i = baseIdx-1; i >= 0; i--){
    for(let j = 1; j < (4*Object.keys(baseObject).length); j+=4){
        if(input[i][j] !== ' '){
            baseObject[parseInt(input[baseIdx][j])].push(input[i][j])
        }
        if(input2[i][j] !== ' '){
            pt2Object[parseInt(input2[baseIdx][j])].push(input2[i][j])
        }
    }
}


// pt 1 solution
for(let i = baseIdx+2; i < input.length; i++){
    let instructions = input[i].split(' ')
    let fromStack = parseInt(instructions[3])
    let toStack = parseInt(instructions[5])
    // j is the qty stack
    for(let j = 0; j < parseInt(instructions[1]); j++){
        baseObject[toStack].push(baseObject[fromStack].pop())
    }
}

console.log(pt2Object)

// pt 2 solution
for(let i = baseIdx+2; i < input2.length; i++){

    let instructions = input2[i].split(' ')
    let fromStack = parseInt(instructions[3])
    let toStack = parseInt(instructions[5])
    const newArray = [] // slicing didn't work so i had to enter it into a new array.
    for(let j = 0; j < parseInt(instructions[1]); j++){
        newArray.push(pt2Object[fromStack].pop())
    }
    for(let k = 0; k < parseInt(instructions[1]); k++){
        pt2Object[toStack].push(newArray.pop())
    }

}
for(let i = 1; i <= Object.keys(baseObject).length; i++){
    pt1SolutionArray.push(baseObject[i][baseObject[i].length-1])
}
// console.log(pt2Object)
for(let i = 1; i <= Object.keys(pt2Object).length; i++){
    pt2SolutionArray.push(pt2Object[i][pt2Object[i].length-1])
}

console.log(`After moving all the boxes around, the top of each stack will spell out ${pt1SolutionArray.join('')}`)
console.log(`But on the crate mover 9001, the actual order would be ${pt2SolutionArray.join('')}`)