const inputBoxElement = document.querySelector(".inputBox");
const addBtnElement = document.querySelector(".addBtn");
const allToDosElement = document.querySelector(".displayTodos");

const toDos = [];

addBtnElement.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = document.querySelector(".inputBox").value;
  if (inputValue !== "") {
    toDos.push(inputValue);
    console.log(toDos);
  }

  inputBoxElement.value = " ";

  toDos.forEach((todo) => {
    const toDoElement = document.createElement('div');
    toDoElement.classList.add("todo");

    const toDoItem = document.createElement('p');
    toDoItem.innerText = todo;

    toDoElement.append(toDoItem);

    allToDosElement.append(toDoElement);

  });

})
