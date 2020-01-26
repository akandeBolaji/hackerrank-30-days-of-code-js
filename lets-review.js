function processData(input) {
    //console.log(input);
    //Enter your code here
    var message = input.split("\n");
    var testCase = parseInt(message[0]);
    for (var i = 0; i < testCase; i++) {
        let string = message[i + 1];
        let split = string.split('')
        let even = '';
        let odd = '';
        for (var j= 0; j < string.length; j++) {
            if (j % 2 == 0) {
                even += split[j]; 
            }
            else {
                odd += split[j];
            }
        }  
        console.log(`${even} ${odd}`);  
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
