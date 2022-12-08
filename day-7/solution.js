const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("utf-8");
const input = text.split("\n");

const fileSystem = {};

for (let i = 0; i < input.length; i++) {
    // creates an object of all directories, including `/`
    if (input[i].split(" ")[0] === "$" && input[i].split(" ")[1] === "ls") {
        fileSystem[input[i - 1].split(" ")[2]] = 0;
    }
}

console.log(fileSystem);
Object.keys(fileSystem).forEach((element) => count(element));
console.log(fileSystem);

function count(dir) {
    // dir is the directory we are looking for
    for (let i = 0; i < input.length; i++) {
    // go through all of input
    // look for cd dir
    // array-ify it until we hit $
    // call count(dir) again if there is a dir ____ in the array
    // if no dir - count the numbers
        if (input[i].split(" ")[1] === "cd" && input[i].split(" ")[2] === dir) {
            let theArr = [];
            for (let j = i + 2; j < input.length; j++) {
                if (input[j].split(" ")[0] === "$") {
                    break;
                }
                // console.log(input[j])
                theArr.push(input[j]);
            }
            for (let j = 0; j < theArr.length; j++) {
                if (parseInt(theArr[j].split(" ")[0]) > 0) {
                    console.log(`adding ${parseInt(theArr[j].split(" ")[0])} to ${input[i].split(" ")[2]}`);
                    fileSystem[input[i].split(" ")[2]] += parseInt(theArr[j].split(" ")[0]);
                    // return parseInt(theArr[j].split(" ")[0]);
                    // console.log(`${fileSystem[dir]} is input dir`)
                } else if (theArr[j].split(" ")[0] === "dir") {
                    console.log(fileSystem);
                    fileSystem[dir] = fileSystem[dir] + count(theArr[j].split(" ")[0]);
                    // count(theArr[j].split(' ')[0])
                } else {
                console.log(theArr);
                console.log("error line 47");
                }
            }
        }
    }
}
