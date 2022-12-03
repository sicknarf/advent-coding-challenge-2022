const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const textByLine = text.split("\n")
const arrayOfElves = []
let newElf = []

for(let i = 0; i < textByLine.length; i++){
    if(textByLine[i] !== ""){
        newElf.push(textByLine[i])
    } else {
        arrayOfElves.push(newElf)
        newElf = []
    }
}

let highestIdx = 0
let highestNum = 0
let secondHighest = 0
let thirdHighest = 0

for(let i = 0; i < arrayOfElves.length; i++){
    let sum = 0;
    for(let j = 0; j < arrayOfElves[i].length; j++){
        sum += parseInt(arrayOfElves[i][j])
    }
    if(sum > highestNum){
        highestIdx = i
        highestNum = sum
    }
}

for(let i = 0; i < arrayOfElves.length; i++){
    let sum = 0;
    for(let j = 0; j < arrayOfElves[i].length; j++){
        sum += parseInt(arrayOfElves[i][j])
    }
    if(sum > secondHighest && sum !== highestNum){
        highestIdx = i
        secondHighest = sum
    }
}

for(let i = 0; i < arrayOfElves.length; i++){
    let sum = 0;
    for(let j = 0; j < arrayOfElves[i].length; j++){
        sum += parseInt(arrayOfElves[i][j])
    }
    if(sum > thirdHighest && sum !== highestNum && sum !== secondHighest){
        highestIdx = i
        thirdHighest = sum
    }
}


console.log(`The elf carrying the most calories of berries is the elf at index ${highestIdx} with ${highestNum} calories`)

console.log(`The elf carrying the second most is carrying ${secondHighest} calories`)

console.log(`The elf carrying the third most is carrying ${thirdHighest} calories`)

console.log(`Therefore, altogether, they are carrying ${highestNum+secondHighest+thirdHighest} calories`)