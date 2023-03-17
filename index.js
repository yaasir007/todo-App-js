const inputBoxElement = document.querySelector(".inputBox");
const addBtnElement = document.querySelector(".addBtn");
const allToDosElement = document.querySelector(".displayTodos");

const toDos = [];

addBtnElement.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = document.querySelector(".inputBox").value;
  if (inputValue !== "") {
    toDos.push(inputValue);
    inputBoxElement.value = " ";
  }

  let id = 0;
  if (id < toDos.length) {
    iterate(id);
    id++;
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
    const toDoitemBtnDelete = document.createElement("button");

    toDoitemBtnEdit.innerText = "Edit";
    toDoitemBtnDelete.innerText = "Delete";

    toDoitemBtns.append(toDoitemBtnEdit, toDoitemBtnDelete);

    toDoitem.append(toDoitemText, toDoitemBtns);

    allToDosElement.append(toDoitem);

    console.log(toDoitem);
}
