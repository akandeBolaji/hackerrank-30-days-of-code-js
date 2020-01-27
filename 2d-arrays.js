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
    let arr = Array(6);
    let max = -99999;
    let arr2d = [];
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
        arr2d[i] = arr[i];
    }
    for (let i = 0; i < 4; i++) {
        for (var j =0; j < 4; j++) {
            let sum = arr2d[i][j] + arr2d[i][j + 1] + arr2d[i][j + 2] + arr2d[i+1][j+1] + arr2d[i+2][j] + arr2d[i+2][j + 1] + arr2d[i+2][j+2];
            if (sum > max){
                max = sum;
            }
        }
    }
    console.log(max);
}
