// ES7-2016----------------------------------
// includes
console.log('Hello'.includes('o'));

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('dog'));
console.log(pets.includes('bird'));

//exponential operator 

const square = (x) => x**2
console.log(square(9));
const cube = (x) => x**3
console.log(cube(9));


// ES8-2017----------------------------------
//.padStart, .padEnd
console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10));

//long parameters
const fun = (a, b, c, d, ) => console.log(a);
fun(1,2,3,4,)

//object.values, object.entries, object.keys

let obj = {
    username0: 'Santa',
    username1: 'Alex',
    username2: 'Mr. Zhang'
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(value => console.log(value));
Object.entries(obj).forEach(value => console.log(value));

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})

//EM10-2019
//flat //not support yet

