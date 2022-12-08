const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const input = text.split("\n")

const fileSystem = {}

for(let i = 0; i < input.length; i++){
    // let ip = input[i].split(' ')
    // let prev = input[i-1]
    let cd = 0
    if (input[i].split(' ')[0] === '$' && input[i].split(' ')[1] === 'ls'){
        fileSystem[input[i-1].split(' ')[2]] = 0
        for(let j = i+1; j < input.length; j++){
            if(parseInt(input[j]) > 0){
                fileSystem[input[i-1].split(' ')[2]] += parseInt(input[j])
            }
            if(input[j].split(' ')[0] === '$'){
                
            }
        }
    }
    
    // if (parseInt(ip[0]) > 0){
        // parseInt(ip[0]) // this will pull the file on the current line 
    // }
}

console.log(fileSystem)

function directoryScan(array){ 
    for (let i = 0; i < cd.length; i++){

    }
}