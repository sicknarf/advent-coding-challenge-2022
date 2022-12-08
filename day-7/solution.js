const fs = require("fs");
// const text = fs.readFileSync("./input.txt").toString("utf-8");
const text = fs.readFileSync("./input copy.txt").toString("utf-8");

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
    if(Object.values(fileSystem)[i] < 100000){
        solution += Object.values(fileSystem)[i]
    }
}

console.log('below is solution')
console.log(solution)



function count(dir) {
    // dir is the directory we are looking for
    for (let i = 0; i < input.length; i++) {
    // go through all of input
    // look for cd dir
        // store dir externally
        // one item adds amount to dir
        // cd .. 
        // cd to store dir (recursion stats here)
        // 
    // hit 
    // array-ify it until we hit $
    // call count(dir) again if there is a dir ____ in the array
    // if no dir - count the numbers
    let file = 0
    if (input[i].split(" ")[1] === "cd" && input[i].split(" ")[2] === dir) {
        for(let j = i+1; j < input.length; j++){
            // console.log(file)
            if (input[j].split(" ")[1] === "cd" && input[j].split(" ")[2] !== '..') {
                console.log(input[j].split(" ")[2])
            } else if (input[j].split(" ")[1] === "cd" && input[j].split(" ")[2] === '..') {
                fileSystem[dir] += file
                console.log(`file size is at ${file}`)
                return file
            } if (parseInt(input[j].split(" ")[0]) > 0 && input[j].split(" ")[0] !== '$') {
                // file += parseInt(input[j].split(" ")[0])
                fileSystem[dir] += parseInt(input[j].split(" ")[0])
                console.log(parseInt(input[j].split(" ")[0])+" line 45")
            }
        }
    } 
    //old code
        // if (input[i].split(" ")[1] === "cd" && input[i].split(" ")[2] === dir) {
        //     let theArr = [];
        //     for (let j = i + 2; j < input.length; j++) {
        //         if (input[j].split(" ")[0] === "$") {
        //             break;
        //         }
        //         // console.log(input[j])
        //         theArr.push(input[j]);
        //     }
        //     for (let j = 0; j < theArr.length; j++) {
        //         if (parseInt(theArr[j].split(" ")[0]) > 0) {
        //             console.log(`adding ${parseInt(theArr[j].split(" ")[0])} to ${input[i].split(" ")[2]}`);
        //             fileSystem[input[i].split(" ")[2]] += parseInt(theArr[j].split(" ")[0]);
        //             // return parseInt(theArr[j].split(" ")[0]);
        //             // console.log(`${fileSystem[dir]} is input dir`)
        //         } else if (theArr[j].split(" ")[0] === "dir") {
        //             console.log(fileSystem);
        //             fileSystem[dir] = fileSystem[dir] + count(theArr[j].split(" ")[0]);
        //             // count(theArr[j].split(' ')[0])
        //         } else {
        //             console.log(theArr);
        //             console.log("error line 47");
        //         }
        //     }
        // }
    }
}

