var todos = [
    "clean room!",
    "brush teeth!",
    "excercise!",
    "study javascript!",
    "eat health!"
];

for (let i = 0; i < todos.length; i++) {
    console.log("It's time to ", todos[i]);
};

todos.forEach(function(td, i){
    console.log(td, i);
})

function logTodos(todo, i){
    console.log(todo, i);
}

todos.forEach(logTodos)