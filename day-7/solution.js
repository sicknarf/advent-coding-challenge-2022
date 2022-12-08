const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")

const fileSystem = {}

for(let i = 0; i < input.length; i++){
    // creates an object of all directories, including `/`
    if (input[i].split(' ')[0] === '$' && input[i].split(' ')[1] === 'ls'){ 
        fileSystem[input[i-1].split(' ')[2]] = 0
    }
}

for(let i = 1; i < input.length; i++){
    if (input[i].split(' ')[0] === '$' && input[i].split(' ')[1] === 'ls'){ 
        // ls(input, i, input[i-1].split(' ')[0])
    }
}

// console.log(fileSystem)

// console.log(Object.keys(fileSystem))

// function ls(array, iterator, directoryName){ 
//     for (let j = iterator; j < array.length; j++){
//         if(array[j].split(' '[0] === '$')){
//             break
//         }
//         if(array[j].split(' '[0] === 'dir')){
//             myDirectory = array[j].split(' '[1])
//         }
//     }
//     for (let i = 0; i < array.length; i++){
//         if(array[i].split(' '[0] === 'cd') && array[i].split(' '[1] === myDirectory)){

//         }
//     }
// }

let myArr = ['simulating input']
let testArr = ['simulating child directory'] 
let testName = 'simulating directory name'

// child directory: from CD/LS to next $

function count(dir){ // dir is the directory we are looking for
    for(let i = 0; i < input.length; i++){
        // go through all of input
        // look for cd dir
        // array-ify it until we hit $
        // call count(dir) again if there is a dir ____ in the array
        // if no dir - count the numbers
        // if(input[i].split(' ')[1]==='cd'){
            //     console.log(input[i].split(' ')[2])
            // }
            if(input[i].split(' ')[1] === 'cd' && input[i].split(' ')[2] === dir){
                let theArr = []
            for(let j = i+2; j < input.length; j++){
                if(input[j].split(' ')[0] === '$'){
                    break
                }
                // console.log(input[j])
                theArr.push(input[j])
            }
            for(let j = 0; j < theArr.length; j++){
                if(parseInt(theArr[j].split(' ')[0]) > 0){
                    fileSystem[dir] += parseInt(theArr[j].split(' ')[0])
                    console.log(parseInt(theArr[j].split(' ')[0]))
                    console.log(theArr[j])
                } else if (theArr[j].split(' ')[0] === 'dir') {
                    count(theArr[j].split(' ')[0])
                } else {
                    console.log(theArr)
                }
            }
        }
        
        // if(parseInt(theArr.split(' ')[0]) > 0){
        //     fileSystem[dir] += parseInt(testArr.split(' ')[0])
        //     fileSystem[testName] += parseInt(testArr.split(' ')[0])
        // }
        // if(theArr.split(' ')[0] === 'dir'){
        //     count(theArr.split(' ')[1])
        // }
    }
}

// for(let i = 0; i < Object.keys(fileSystem).length; i++){
//     count(Object.keys(fileSystem)[i])
// }

Object.keys(fileSystem).forEach(element => count(element))
console.log(fileSystem)
console.log(parseInt('dir'))