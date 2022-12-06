const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")

const sections = input.map(assignment => 
    assignment.split(',')
    )

for (let i = 0; i < sections.length; i++){
    for(let j = 0; j < sections[i].length; j++){
        sections[i][j].split('-')
    }
}

console.log(sections)