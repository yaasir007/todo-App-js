const btn = document.querySelector(".btnSubmit");
const todoContainer = document.querySelector(".items");
const inputField = document.querySelector(".field");
const btnDelete = document.querySelector(".delete");


btn.addEventListener('click', () => {
  const inputValue = document.querySelector(".field").value;
  if (inputValue === '') {
    console.log("Please add an item");
  }
  btnDelete.style.display = "block";
  inputField.value = "";

  const deleteBtnElement = document.createElement(span);
  deleteBtnElement.classList.add('delete');
  todoContainer.innerHTML += `${inputValue} ${deleteBtnElement} </br>`;

})
