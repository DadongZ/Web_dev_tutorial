// pass by value
var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

// pass by obj
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easy';

console.log(obj2.password);
console.log(obj1.password); //obj1 also changed (one box)

//try array
var c = [1,2,3,4,5];
var d = c;

d.push(4654313213)

console.log(d);
console.log(c); // c obj also changed

//good is saving memory; bad is to be careful for obj

var d = [].concat(c);
d.push(434341365);
console.log(d); // c not changed

//another way
// let obj = {
//     a: 'a',
//     b: 'b',
//     c: {
//         deep: 'try and copy me'}
//     };
// let clone = Object.assign({}, obj);
// let clone2 = {...obj}
// obj.c = 5
// console.log(obj); //changed
// console.log(clone); //not changed
// console.log(clone2); //not changed

//deep clone
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'}
    };
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj)) //be careful

obj.c.deep = 'Hiiii' 
console.log(obj); //changed
console.log(clone); //changed
console.log(clone2); //changed
console.log(superClone); //not changed
