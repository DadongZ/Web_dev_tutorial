
const fetch = require("node-fetch"); 

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
})).then(array => {
    console.log('0', array[0]);
    console.log('1', array[1]);
    console.log('2', array[2]);
    console.log('3', array[3]);
})
    .catch(err => console.log('there is something wrong: ', err))
    .finally( () =>console.log('extra'));