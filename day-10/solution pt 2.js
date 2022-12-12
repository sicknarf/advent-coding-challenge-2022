const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
// const text = fs.readFileSync("./sample input.txt").toString("utf-8");
const input = text.split("\n");

const clockCircuit = input.map(x => x.split(' '))

let x = 1
let cycles = 0
const solution = ['', '', '', '', '', '']

for(let i = 0; i < clockCircuit.length; i++){
    if(clockCircuit[i][0] === 'addx'){
        cycles++
        checkCycle()
        cycles++
        checkCycle()
        x += parseInt(clockCircuit[i][1])
    } else if(clockCircuit[i][0] === 'noop'){
        cycles++
        checkCycle()
    }
}


function checkCycle(){   
    let position = cycles-1
    if (cycles <= 40){
        console.log(`x: ${x}`)
        console.log(`cycles: ${cycles}`)
        if(x === position || x-1 === position || x+1 === position){
            solution[0] = solution[0] + '#'    
        }else{
            solution[0] = solution[0] + '.'
        }
    } else if (cycles > 40 && cycles < 81){
        if(x === position-40 || x-1 === position-40 || x+1 === position-40){
            solution[1] = solution[1] + '#'    
        }else{
            solution[1] = solution[1] + '.'
        }
    } else if (cycles > 80 && cycles < 121){
        if(x === position-80 || x-1 === position-80 || x+1 === position-80){
            solution[2] = solution[2] + '#'    
        }else{
            solution[2] = solution[2] + '.'
        }
    } else if (cycles > 120 && cycles < 161){
        if(x === position-120 || x-1 === position-120 || x+1 === position-120){
            solution[3] = solution[3] + '#'    
        }else{
            solution[3] = solution[3] + '.'
        }
    } else if (cycles > 160 && cycles < 201){
        if(x === position-160 || x-1 === position-160 || x+1 === position-160){
            solution[4] = solution[4] + '#'    
        }else{
            solution[4] = solution[4] + '.'
        }
    } else if (cycles > 200 && cycles <= 240){
        if(x === position-200 || x-1 === position-200 || x+1 === position-200){
            solution[5] = solution[5] + '#'    
        }else{
            solution[5] = solution[5] + '.'
        }
    }
}

console.log(solution)