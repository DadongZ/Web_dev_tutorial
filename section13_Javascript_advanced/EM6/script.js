///////////////////////////////////
//let + const
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log("inside ", wizardLevel); //true
}

console.log("outside ", wizardLevel); //false

//compare to var
const player = "bobby";
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
    var wizardLevel = true;
    console.log("inside ", wizardLevel); //true
}
console.log("outside ", wizardLevel); //true


//const

const obj = {
    player: 'bobbly',
    experience: 100,
    wizardLevel: false
}
//obj is mutable but its content
obj.experience = 80

// distructuring
const {player, experience} = obj;  //like select
let {wizardLevel} = obj;

//object properties
const name = 'Alex Zhang';
const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

//if property name same as property value
const a = 'Simon';
const b = true;
const c ={};

const obj = {a, b, c}

//template strings
const name = "Alex";
const age = 10;
const pet = "cat";
const greetingBest = `Hello ${name} you seem to be ${age-5}. What a lovely ${pet} you have!`;

//default arguments
function greet(name = '', age = 30, pet = 'cat') {
    return greetingBest = `Hello ${name} you seem to be ${age - 5}. What a lovely ${pet} you have!`;
}

//symbol
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
sym2 == sym3 //false, always unique

//arrow functions
function add(a,b) {
    return a + b
}

const add = (a, b) => a + b; //single return