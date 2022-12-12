const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString('utf-8');

// pt 1
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

// pt 2
// dynamically generating arrays for pt 2

let calcArr = 13
let distinctChar = [...new Array(calcArr+1).keys()]



for(let i = calcArr; i < input.length; i++){
    const markerArray = distinctChar.map(num => input[i - num])
    calcArr++
    console.log(markerArray)
    // if(new Set(markerArray).size === 4){
    //     console.log(markerArray)
    //     break
    // }
    if(new Set(markerArray).size === 14){
        console.log(markerArray)
        break
    }
}

console.log(`After extending the range from 4 to 14 characters, it turns out that the new signal processes ${calcArr} characters before it finds the start-of-marker packet.`)
