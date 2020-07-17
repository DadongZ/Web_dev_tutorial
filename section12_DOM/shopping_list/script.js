var button = document.getElementById("enter");
var input = document.getElementById("userinput")
var ul = document.querySelector('ul')

// add item by click or key enter
function inputLength() {
    return input.value.length
}

function createListElment() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    // Create a delete button and configure it:
    var btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.textContent = "Delete";
    // Append the button to the list item
    li.appendChild(btnDelete);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElment()
    }
}

function addListAfterEnter(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElment()
    }
}
function deleteAfterClick(event) {
  // Determine if it was a delete button that was clicked
  if(event.target.classList.contains("delete")){
    // Remove the closest li ancestor to the clicked element
    event.target.closest("li").remove();
  }
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterEnter) 
ul.addEventListener("click", deleteAfterClick);