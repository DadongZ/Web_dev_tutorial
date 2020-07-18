const array = [1, 2, 10, 16]
//not good way to create new array double
const double = []
const newArray = array.forEach((num)=>{
    double.push(num*2);
})

console.log(double);

//map, filter, reduce
//use map for new array
const mapArray = array.map(num => {
    return num * 2 //have to use return
});

console.log(mapArray);