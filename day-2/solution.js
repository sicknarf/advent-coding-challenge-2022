const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const plays = text.split("\n")

let totalScore = 0

for(let i = 0; i < plays.length; i++){
    let player = 0
    let opponent = 0

    if(plays[i][2] === "X"){
        totalScore += 1
        player += 1
    } else if(plays[i][2] === "Y"){
        totalScore += 2
        player += 5
    } else if(plays[i][2] === "Z"){
        totalScore += 3
        player += 11
    }
    if(plays[i][0] === "A"){
        opponent -= 1
    } else if(plays[i][0] === "B"){
        opponent -= 5
    } else if(plays[i][0] === "C"){
        opponent -= 11
    }
    if(player + opponent === 0){
        totalScore += 3
    } else if( player + opponent === 4 || player + opponent === 6 || player + opponent === -10){
        totalScore += 6
    }
}

console.log(`if everything goes according to plan on the strategy guide, the total score would be ${totalScore}`)