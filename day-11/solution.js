const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
// const text = fs.readFileSync("./sample input.txt").toString("utf-8");
const input = text.split("\n");

const monkeys = []

// {
//     idx: 
//     starting items:
//     operation:
//     test: {
//         'true': ,
//         'false': }
// }

for(let i = 0; i < input.length; i += 7){
    const newMonkey = 
    {
        startingItems: [],
        operation: null,
        testFunction: null,
        test: {
            'true': null,
            'false': null
        }
    }
    const items = input[i+1].split(': ')



    newMonkey.startingItems = items[1].split(',').map(x => parseInt(x))
    newMonkey.operation = input[i+2].split(': ')[1]

    monkeys.push(newMonkey)
}

console.log(monkeys)

function monkeyFunction(monkey, num) {
    if(true){
        console.log(true)
    }
}