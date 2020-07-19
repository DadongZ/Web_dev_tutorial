//Inline script -> namespace contamination
//script tags: 1.js, 2.js, 3.js ... lack of dependency resolution; worse namespace

//--------------------INFE-------------------------
//js1
var myApp={};
//js2
(function () {
    myApp.add=function (a,b) {
        return a + b;
    }
})();

//----------------CommonJS+browserify--------------------
//js1
module.exports = function add(a, b) {
    return a+b;
}
//js2
var add = requre('./add')


//----------------modules, ES6+webpack2--------------------
//js1
export const add = (a,b) => a + b;
//or
export default function add() {
    return a = b;
}

//js2
import add from './add';

//webpack
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}