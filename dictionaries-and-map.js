function processData(input) {
    //Enter your code here
    var myObject = [];
    var split = input.split('\n')
    var entries = parseInt(split[0]);
    for (var i = 0; i < entries; i++){
        var current = split[i + 1];
        var splitString = current.split(' ');
        myObject[splitString[0]] = splitString[1];
    }
    for (var i = (parseInt(entries) + 1); i < split.length; i++) {
        var check = split[i];
        
        if (myObject[check]) {
            console.log(`${check}=${myObject[check]}`);
        }
        else {
            console.log('Not found');
        }
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
