const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const plays = text.split("\n")

let totalScore = 0
let properScore = 0
const rock = 1
const paper = 2
const scissors = 3

for(let i = 0; i < plays.length; i++){
    let player = 0
    let opponent = 0

    if(plays[i][2] === "X"){
        totalScore += rock
        player += 1
    } else if(plays[i][2] === "Y"){
        totalScore += paper
        player += 5
    } else if(plays[i][2] === "Z"){
        totalScore += scissors
        player += 11
    }
    if(plays[i][0] === "A"){ // rock +1
        opponent -= 1
    } else if(plays[i][0] === "B"){ // paper +2
        opponent -= 5
    } else if(plays[i][0] === "C"){ // scissors +3
        opponent -= 11
    }
    if(player + opponent === 0){
        totalScore += 3
    } else if( player + opponent === 4 || player + opponent === 6 || player + opponent === -10){
        totalScore += 6
    }
}

console.log(`if everything goes according to plan on the strategy guide, the total score would be ${totalScore}`)

for (let i = 0; i < plays.length; i++){
    let playerState = ""
    if(plays[i][2] === "X"){ // lose
        playerState = "lose"
    } else if(plays[i][2] === "Y"){ // draw + 3
        playerState = "draw"
        properScore += 3
    } else if(plays[i][2] === "Z"){ // win + 6
        playerState = "win"
        properScore += 6
    }

    if(plays[i][0] === "A"){
        if(playerState === "lose"){
            properScore += scissors
        } else if(playerState === "draw"){
            properScore += rock
        } else if(playerState === "win"){
            properScore += paper
        }
    } else if(plays[i][0] === "B"){
        if(playerState === "lose"){
            properScore += rock
        } else if(playerState === "draw"){
            properScore += paper
        } else if(playerState === "win"){
            properScore += scissors
        }
    } else if(plays[i][0] === "C"){
        if(playerState === "lose"){
            properScore += paper
        } else if(playerState === "draw"){
            properScore += scissors
        } else if(playerState === "win"){
            properScore += rock
        }
    }
}

console.log(`However, with the proper interpretation of the strategy guide, your total score SHOULD be ${properScore}`)