const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
// const text = fs.readFileSync("./input copy.txt").toString("utf-8");

const input = text.split("\n");

const fileSystem = {};
let solution = 0

for (let i = 0; i < input.length; i++) {
    // creates an object of all directories, including `/`
    if (input[i].split(" ")[0] === "$" && input[i].split(" ")[1] === "ls") {
        fileSystem[input[i - 1].split(" ")[2]] = 0;
    }
}

// console.log(fileSystem);
Object.keys(fileSystem).forEach((element) => count(element));
console.log(fileSystem);

for(let i = 0; i < Object.values(fileSystem).length; i++){
    if(Object.values(fileSystem)[i] <= 100000){
        solution += Object.values(fileSystem)[i]
    }
}

console.log('below is solution')
// 1044380 is wrong - answer too low
console.log(solution)



function count(dir) {
    // dir is the directory we are looking for
    let file = 0
    for (let i = 0; i < input.length; i++) {
    // go through all of input
    // look for cd dir
        // number adds amount to dir and stores externally
        // cd .. 
        // cd newdir calls the same function on dir, should return a value of the amount that dir holds
    
        if (input[i].split(" ")[1] === "cd" && input[i].split(" ")[2] === dir) {
            for(let j = i+1; j < input.length; j++){
                const firstWord = input[j].split(" ")[0]
                const secondWord = input[j].split(" ")[1]
                const thirdWord = input[j].split(" ")[2]
                if(parseInt(firstWord) > 0 && firstWord !== '$'){ 
                    // add the number to an external number
                    file += parseInt(firstWord) 
                } else if (secondWord === "cd" && thirdWord !== '..'){
                    // start recursion
                    count(secondWord)
                } else if (secondWord === "cd" && thirdWord === '..'){
                    // add external number to current directory
                    // return the external number, end the recursion on this level
                    fileSystem[dir] += file
                    console.log(`returning ${file}`)
                    return file
                }
            }
            fileSystem[dir] += file
        }
    }
}

