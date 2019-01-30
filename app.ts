let nameVar: string = 'Blake';     // Declare name, give it the value of 'Blake'
const states: number = 50;      // Declare states, give it the value of 50

let x: number = 5;              // Declare x, give it the value of 5
let y:  number = 4;              // Declare y, give it the value of 4
let z: number = x + y;          // Declare z, give it the value of x + y
console.log(z);
console.log(states);

/*
The code below will display the
first alert if the name begins
with the letter 'L' or the second
alert if the name begins with a
different letter
*/
if(nameVar.charCodeAt(0) >= 76) {
    alert('Back of the Line!');
} else {
    alert('Next!');
}

function sayHello() {
    alert('Hello Typescript!');
}
sayHello();

function checkAge(checkName: string, age: number) {
    if(age < 21) {
        alert(`Sorry ${checkName}, you aren't old enough to view this page!`);
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('Adam', 17);

let veg: Array<string> = ['corn', 'okra', 'squash'];
for(let i = 0; i < veg.length; i++) {
    console.log(veg[i]);
};

let ofAge: { name2: string, age: number }[] = [
    {name2:'John', age: 20},
    {name2:'Hannah', age: 22},
    {name2:'Bill', age: 19},
    {name2:'Jessica', age: 24},
    {name2:'Steve', age: 18}
];
for(let i = 0; i < ofAge.length; i++) {
    checkAge(ofAge[i].name2, ofAge[i].age)};

function getLength(word: string) {
    if(word.length % 2 == 0) {
        alert('The world is nice and even!');
    } else {
        alert('The world is an odd place!');
    }
    return word.length;
}
console.log(getLength('Hello World'));
console.log(getLength('even'));