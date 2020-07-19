// const flattened = [
//     [0, 1],
//     [2, 3],
//     [4, 5]
// ].reduce((accumulator, array) => {
//     console.log('accumulator', accumulator);
//     console.log('array: ', array);
//     return accumulator.concat(array)
// },[8,9]);

// console.log(flattened);

//using debugging
const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((accumulator, array) => {
    debugger; //frozen and stop in the middle
    return accumulator.concat(array)
},[8,9]);

console.log(flattened);