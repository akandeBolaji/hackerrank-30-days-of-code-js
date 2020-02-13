'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine(), 10);

    const names = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        if (/@gmail.com/.test(emailID)) {
            names.push(firstName);
        }
    }

    if (names.length > 0) {
        for (var i = 0; i < names.length; i++) {
            for (var j = i+1; j < names.length; j++) {
                if (names[j] < names[i]) {
                    let name = names[j];
                    names[j] = names[i];
                    names[i] = name;
                }
            }
        }
        names.forEach((name) => {
            console.log(name);
        }) 

        }
}

