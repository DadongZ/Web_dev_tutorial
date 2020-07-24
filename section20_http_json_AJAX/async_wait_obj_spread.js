//obj spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const {tiger, lion, ...rest} = animals;
objectSpread(tiger, lion, rest);

console.log(tiger);
console.log(rest);

const array = [1,2,3,4,5,6]

function sum(a,b,c,d,e,f){
    return a+b+c+d+e+f
}

console.log(sum(...array))
