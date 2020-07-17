var database = [
    {
        username: "alex",
        password: "bridlebit"
    },
    {
        username: "Dadong",
        password: "103"
    },
    {
        username: "Halley",
        password: "unc"
    }
];

var newsFeed =[
    {
        username: "Dadong",
        timeline: "So excited to learn"
    },
    {
        username: "Halley",
        timeline: "Javascript is soo cool!"
    }
];


function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)){
        console.log(newsFeed);
    } else {
        alert("Wrong username or password! Have you registered?")
    }
}

var userNamePrompt = prompt ("what's your username?");
var passwordPrompt = prompt ("what's your password?");
signIn(userNamePrompt, passwordPrompt);