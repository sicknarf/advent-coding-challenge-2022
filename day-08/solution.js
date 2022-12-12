const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
// const text = fs.readFileSync("./sampleinput.txt").toString("utf-8");
const input = text.split("\n");

let inputArray = input.map(x=> x.split(''))
let forest = inputArray.map(x=> x.map(y=> parseInt(y)))

let visibleTrees = (forest[0].length*2) + ((forest.length-2)*2)

for(let i = 1; i < forest.length-1; i++){
    for(let j = 1; j < forest[i].length-1; j++){
        const tree = forest[i][j]
        const above = []
        const below = []
        const left  = []
        const right = []
        for(let k = 0; k < i; k++){
            above.push(forest[k][j])
        }
        for(let k = i+1; k < forest.length; k++){
            below.push(forest[k][j])
        }
        for(let k = 0; k < j; k++){
            left.push(forest[i][k])
        }
        for(let k = j+1; k < forest[i].length; k++){
            right.push(forest[i][k])
        }

        if( !above.some(x=> x >= parseInt(tree)) || // checking if any of the trees are taller
            !below.some(x=> x >= parseInt(tree)) ||
            !left.some(x=> x >= parseInt(tree)) ||
            !right.some(x=> x >= parseInt(tree))){
                visibleTrees++
            }
    }
}

console.log(visibleTrees)

