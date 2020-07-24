const promise = new Promise ((resovle, reject) => {
    return true ?
        resovle('Stuff Worked'):
        reject('Error, it broke');
})

const promise2 = new Promise ((resovle, reject) => {
    setTimeout(resovle, 100, 'Hiii')
})

const promise3 = new Promise ((resovle, reject) => {
    setTimeout(resovle, 1000, 'Hellooooo')
})

const promise4 = new Promise ((resovle, reject) => {
    setTimeout(resovle, 3000, 'This is what I am looking for')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values =>{
        console.log(values);
    })

promise
    .then(result=>result + "!")
    .then(result2 => {
        //throw Error
        console.log(result2);
    })
    .catch(() => console.log('error!!!!'));
