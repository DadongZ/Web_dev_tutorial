//what is a program
//1. memory allocate / chrome v8 memory heap
//2. parse and execute /chrome v8 call stack

//memory heap =>global memory cost
const a =1;  //allocate memory
const b =10;  //allocate memory
const c =100;  //allocate memory

//call stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

one()

//JS is a single threaded language that can be non-blokcing. Only one statement is executed at a time

//synchronous programming: exec line one by one
//stack overflow, recursive
function foo(){
    foo()
}

//asynchronous programming (non-blocking)
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);
console.log('3');

//JS runtime environment
//1. DOM
//2. AJAX (XML HttpRequest)
//3. Timeout(setTimeout)