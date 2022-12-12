const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const rucksacks = text.split("\n")

const bothCompartments = []
let prioritySum = 0

for(let i = 0; i < rucksacks.length; i++){
    let triggered = false
    for(let j = 0; j < rucksacks[i].length/2; j++){
        for(let k = rucksacks[i].length-1; k > (rucksacks[i].length-1)/2; k--){
            if(rucksacks[i][k] === rucksacks[i][j] && triggered === false){
                bothCompartments.push(rucksacks[i][j])
                triggered = true
            }
        }
    }
}

for (let i = 0; i < bothCompartments.length; i++){
    prioritySum +=translate(bothCompartments[i])
}
console.log(`Out of the ${bothCompartments.length} rucksacks, the total priority amount of common items is ${prioritySum}}`)


// PART 2
const badges = []
for(let i = 0; i < rucksacks.length-2; i+=3){
    let triggered = false
    for(let j= 0; j < rucksacks[i].length; j++){
        if(rucksacks[i+1].includes(rucksacks[i][j]) && rucksacks[i+2].includes(rucksacks[i][j]) && triggered === false){
            badges.push(rucksacks[i][j])
            triggered = true
        }
    }
}

let badgeSum = 0
for (let i = 0; i < badges.length; i++){
    badgeSum += translate(badges[i])
}
console.log(`All the elves badges have a priority sum of ${badgeSum}`)

// FUNCTIONS
function translate(item){
    const anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
        k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26, A: 27, B: 28, C: 29, D: 30, 
        E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37, L: 38, M: 39, N: 40, 
        O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46, U: 47, V: 48, W: 49, X: 50, 
        Y: 51, Z: 52
    }
    if(item.length === 1) {
        return anum[item]
    } else {
        return item.split('').map(translate);
    }
}