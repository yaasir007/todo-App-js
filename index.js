const inputElement = document.querySelector(".fieldBox");
const btnAddElement = document.querySelector(".btnSubmit");

const AllTodoItemElement = document.querySelector(".displayTodos");
const btnDeleteElement = document.querySelector(".delete");

AllTodoItemElement.style.display = "none";

const alltoDos = [];

btnAddElement.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = inputElement.value;

  let createTodo = () => {
    AllTodoItemElement.innerHTML += `
    <div class="items">
    <span class="todoContent">${inputValue}</span>
    <button class="delete" onClick="deleteTodo(this)"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;

    AllTodoItemElement.style.display = "block";

  }

  if (inputValue !== "") {
    alltoDos.push(inputValue);
    createTodo();
    inputValue = "";
  } else {
    alert("Please enter a valid todo")
  }

});
