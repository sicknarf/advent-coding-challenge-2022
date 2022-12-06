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
for(let i = 0; i < sections.length; i++){
    const elf1 = sections[i][0]
    const elf2 = sections[i][1]
    const firstElfRange = [...Array(elf1[1]-elf1[0]+1).keys()].map(i => i + elf1[0])
    const secondElfRange = [...Array(elf2[1]-elf2[0]+1).keys()].map(i => i + elf2[0])

    const aContainsB = firstElfRange.every(element => {
        return secondElfRange.includes(element)
    })
    const bContainsA = secondElfRange.every(element => {
        return firstElfRange.includes(element)
    })
    if(aContainsB || bContainsA){
        counter++
    }
}

console.log(`for all the different pairing IDs, there are ${counter} IDs that fully overlap`)