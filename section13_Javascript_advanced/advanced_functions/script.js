// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }       
//     return second;
// }

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures: a function ran, the function executed and never again.
// but it's going remember that there are references to those variables
// so the child scope always has access to the parent scope.


//curring
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3) // returns to a function of (b) => 3*b;
curriedMultiply(3)(4)

//Compose: put two funcs to third
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose (sum, sum)(5)

//avoiding side effact and functional purity, deterministic;
