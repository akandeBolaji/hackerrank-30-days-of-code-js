'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification);
        this.scores = scores;
        this.grade = '';
        this.sum = 0;
        this.average = 0;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        for (var i = 0; i < this.scores.length; i++) {
            this.sum += parseInt(this.scores[i]);
        }
        this.average = this.sum/this.scores.length;
        this.grade = this.average <= 100 && this.average >= 90  ? 'O' : this.average < 90 && this.average >= 80 ? 'E' : this.average < 80 && this.average >= 70 ? 'A' : this.average < 70 && this.average >= 55 ? 'P' : this.average < 55 && this.average >= 40 ? 'D' : this.average < 40 && this.average >= 0 ?'T' : ''; 
        this.sum = 0;
        return this.grade;
    }    
}

function main() {
