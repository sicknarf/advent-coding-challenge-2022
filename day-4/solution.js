const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")
const sections = input.map(assignment => 
    assignment.split(',')
    )

// parsing the data
for (let i = 0; i < sections.length; i++){
    for(let j = 0; j < sections[i].length; j++){
        sections[i][j] = sections[i][j].split('-')
        for(let k = 0; k < sections[i][j].length; k++){
            sections[i][j][k] = parseInt(sections[i][j][k])
        }
    }
}

// starting the solution
let counter = 0
for(let i = 0; i < sections.length; i++){ // index of each pairing
    let containsFullSet = false
    const elf1 = sections[i][0]
    const elf2 = sections[i][1]
    const firstElfRange = [...Array(elf1[1]-elf1[0]+1).keys()].map(i => i + elf1[0])
    const secondElfRange = [...Array(elf2[1]-elf2[0]+1).keys()].map(i => i + elf2[0])
    for(let j=0; j<secondElfRange.length; j++){
        if(firstElfRange.includes(secondElfRange[j]) || secondElfRange.includes(firstElfRange[j])){
            containsFullSet = true
            console.log(`triggered on line ${i+1}`)
        }
    }
    if(containsFullSet){
        counter++
        // console.log(`triggered at line ${i+1}`)
        // console.log(`first elf at ${i}`)
        // console.log(firstElfRange)
        // console.log(`second elf at ${i}`)
        // console.log(secondElfRange)
    }
}

console.log(counter)