function processData(input) {
    //Enter your code here
    let actual = input.split('\n')[0];
    let expected = input.split('\n')[1];
    let actualSplit = actual.split(' ');
    let expectedSplit = expected.split(' ');
    if ((actual == expected) || (parseInt(actualSplit[2]) < parseInt(expectedSplit[2])) || (parseInt(actualSplit[2]) == parseInt(expectedSplit[2]) && parseInt(actualSplit[1]) < parseInt(expectedSplit[1])) || ((parseInt(actualSplit[2]) == parseInt(expectedSplit[2])) && (parseInt(actualSplit[1]) == parseInt(expectedSplit[1])) && (parseInt(actualSplit[0]) < parseInt(expectedSplit[1])))) {
        console.log(0)
        return;
    }
    if (actualSplit[1] == expectedSplit[1]) {
        console.log(15 * (actualSplit[0] - expectedSplit[0]))
        return; 
    }
    else if (expectedSplit[2] == actualSplit[2]) {
        console.log(500 * (actualSplit[1] - expectedSplit[1]))
        return;
    }
    else {
        console.log(10000);
        return; 
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
