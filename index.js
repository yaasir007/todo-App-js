const inputBoxElement = document.querySelector(".inputBox");
const addBtnElement = document.querySelector(".addBtn");
const allToDosElement = document.querySelector(".displayTodos");

const toDos = [];
let id = 0;

addBtnElement.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = document.querySelector(".inputBox").value;
  if (inputValue !== " ") {
    toDos.push(inputValue);
    inputBoxElement.value = " ";


    if (id < toDos.length) {
      const testTodo = document.querySelector(".test");
      iterate(id);
      id++;
    }
  }

})



const iterate = (id) => {
  const toDoitem = document.createElement('div');
  toDoitem.classList.add("todo");
  toDoitem.id = id;

  const toDoitemText = document.createElement("p");
  toDoitemText.innerText = toDos[id];

  const toDoitemBtns = document.createElement('div');
  toDoitemBtns.classList.add('toDoBtns');

  const toDoitemBtnEdit = document.createElement('button');
  toDoitemBtnEdit.classList.add("edit", "none");
  const toDoitemBtnDelete = document.createElement("button");
  toDoitemBtnDelete.classList.add("delete", "none");


  toDoitemBtnEdit.innerText = "Edit";
  toDoitemBtnDelete.innerText = "Delete";

  toDoitemBtns.append(toDoitemBtnEdit, toDoitemBtnDelete);

  toDoitem.append(toDoitemText, toDoitemBtns);

  allToDosElement.append(toDoitem);

  console.log(toDoitem);
}
