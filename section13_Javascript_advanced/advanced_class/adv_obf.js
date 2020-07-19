//1. reference type
console.log([1]===[1]); //false
var object1 = {value: 10};
var object2 = object1; //object1 is ref address
var object3 = {value: 10};
console.log(object1==object2); //true
console.log(object1==object3); //false

object1.value = 15
console.log(object1.value); //15
console.log(object2.value); //15
console.log(object3.value); //10

//2. context vs scope
console.log(this); //what object inside of
console.log(this=window); //true
this.alert("hello")

//3. instantiation, make copy of an obj and reuse the code
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    } //this make the play can be accessed by .name .type
    //add method
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

// wizard on top of Player
class Wizard extends Player {
    constructor(name, type) {
        super(name, type) //have to use super() to extend Player
    }
    //method
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Magic')