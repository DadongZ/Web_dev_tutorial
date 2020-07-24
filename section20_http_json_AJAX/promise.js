//a promise is an object that may produce a single value some time in the future either a resolved or rejected.
//three possible states: fulfilled, rejected or pending;

const fetch = require("node-fetch"); 

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results=>{
    console.log(results[0].length);
    console.log(results[1].length);
    console.log(results[2].length);
}).catch(() => console.log('there seems some errors, please double check!'));