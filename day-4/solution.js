const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")
const sections = input.map(assignment => 
    assignment.split(',')
    )

console.log(sections)

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
