//promise-like then
//fecth is a promise function .then
const fetch = require('node-fetch');

//sync
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)


async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

//fetchUsers()

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('There is something wrong: ', err);
    }
}

//getData()

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url))
    for (let request of arrayOfPromises) {
        const data = await request.json()
        console.log(data);
    } 
}

getData2()