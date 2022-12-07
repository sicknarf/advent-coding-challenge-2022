const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString('utf-8');

let solution = 3

for(let i = 3; i < input.length; i++){
    const markerArray = [input[i], input[i-1], input[i-2], input[i-3]]
    solution++
    if(new Set(markerArray).size === 4){
        console.log(markerArray)
        break
    }
}

console.log(`After reviewing the signal, the machine processed ${solution} characters before completing.`)