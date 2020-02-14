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
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);
        let set = [];
        let maximumPossible = 0;
        for (var i = 0; i < n; i++) {
            set[i] = i+1;
        }
        for (var i = 0; i < set.length-1; i++) {
            for (var j= i+1; j < set.length; j++) {
                let bitwise = set[i] & set[j];
                if ((bitwise > maximumPossible) && (bitwise < k)) {
                    maximumPossible = bitwise;
                }
            }
        }
        console.log(maximumPossible);
    }
}
