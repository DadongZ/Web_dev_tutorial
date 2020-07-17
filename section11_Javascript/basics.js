// variables
var first = prompt('Enter you first name: ');
var last = prompt('Enter you last name: ');
yourname = first + " " + last

var first = prompt('Enter fist number: ');
var second = prompt('Enter second number: ');
var sum = Number(first) + Number(second);
alert("This sum is :" + sum);

// if else
var name = "Billy";
if (name === "Billy"){
    alert("Hi Billy");
} else {
    alert("You're not Billy");
}

// && || !
firstName = "Alex"
lastName = "Zhang"
if (firstName === "Alex" && lastName == "Zhang"){
    alert("Hello: " + firstName + lastName);
} else {
    alert("I don't know you!")
}

// function
function sayHello(name) {
    console.log("Hello: ", name)
}
sayHello("Dadong Zhang");

function multiply(a, b) {
    console.log(a, b);
    return a*b
}

var total = multiply(6,8);
alert(total);

//array
var list = ['tiger', 'cat', 'bear', 'bird'];
console.log(list[1]);
list.shift()
list
list.pop()
list
list.push("elephant")
list
list.concat(['bee', 'deer'])
list.sort()

var myList = list.concat(['bee', 'deer'])
myList

//data object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    spells: ["abrak", "poo", "shaza"],
    shout: function(){
        console.log("Hello!!");
    },
    isMarried: false
}

user.shout()

user.name
user.isMarried
user.favouriteFood='spinach'
user

var list = [
    {
        username: "andy",
        password: "secre"
    },
    {
        username: "jess",
        password: "123"
    }
]
list[0].password

//function declaration

function name(params) {
    
}

//function expression

var newFunction = function(){

};

//method

var obj = {
    thisIsMethod: function(){

    }
}

obj.thisIsMethod()

//loops
var todos = [
    "clean room!",
    "brush teeth!",
    "excercise!",
    "study javascript!",
    "eat health!"
];

todos.forEach(function(td, i){
    console.log(td, i);
})

[].forEach

var len = todos.length
for (let i = 0; i < len; i++) {
    todos.pop();
}

countOne=0;
while (countOne < 10) {
    console.log(countOne);
    countOne ++
}


var countTwo = 10;
do {
    console.log(countTwo);
    countTwo--;
} while (countTwo > 0)

todos.forEach(function(td, i){
    console.log(td, i);
})

// keywords
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// instanceof
// new
// super
// switch
// try
// typeof
// yield

