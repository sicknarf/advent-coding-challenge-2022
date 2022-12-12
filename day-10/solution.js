const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
// const text = fs.readFileSync("./sample input.txt").toString("utf-8");
const input = text.split("\n");

const clockCircuit = input.map(x => x.split(' '))

let x = 1
let cycles = 0
const ptOneSolutionArray = []

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

const ptOneSolution = ptOneSolutionArray.reduce(
    (acc, value) => acc + value, 0
)

console.log(ptOneSolution)

function checkCycle(){
    if(cycles === 20 || (cycles-20)%40 === 0){
        console.log(`Signal strength at cycle ${cycles} is ${cycles*x} with x at ${x}`)
        ptOneSolutionArray.push(cycles*x)
    }
}