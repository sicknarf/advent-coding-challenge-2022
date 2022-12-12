const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
// const text = fs.readFileSync("./sampleinput.txt").toString("utf-8");
const input = text.split("\n");

let inputArray = input.map(x=> x.split(''))
let forest = inputArray.map(x=> x.map(y=> parseInt(y)))

let scenicScore = 0

for(let i = 1; i < forest.length-1; i++){
    for(let j = 1; j < forest[i].length-1; j++){
        const tree = forest[i][j]
        const above = []
        const below = []
        const left  = []
        const right = []
        let aboveScore = 0
        let belowScore = 0
        let leftScore = 0
        let rightScore = 0
        for(let k = i-1; k >= 0; k--){
            above.push(forest[k][j])
        }
        for(let k = i+1; k < forest.length; k++){
            below.push(forest[k][j])
        }
        for(let k = j-1; k >= 0; k--){
            left.push(forest[i][k])
        }
        for(let k = j+1; k < forest[i].length; k++){
            right.push(forest[i][k])
        }
        aboveScore = sightline(above, tree)
        belowScore = sightline(below, tree)
        leftScore = sightline(left, tree)
        rightScore = sightline(right, tree)

        if(aboveScore*belowScore*leftScore*rightScore > scenicScore){
            scenicScore = aboveScore*belowScore*leftScore*rightScore
        }
    }
}

console.log(scenicScore)

function sightline(directionArray, tree){
    let score = 0
    for (let k = 0; k < directionArray.length; k++){
        if(directionArray[k] < tree){
            score++
        } else if (directionArray[k] >= tree){
            score++
            break
        } else {
            break
        }
    }
    return score
}
