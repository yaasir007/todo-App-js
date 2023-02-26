const btn = document.querySelector(".btnSubmit");
const todoContainer = document.querySelector(".items");
const inputField = document.querySelector(".field");

btn.addEventListener('click', () => {
  const inputValue = document.querySelector(".field").value;
  if (inputValue === '') {
    console.log("Please add an item");
  }
  todoContainer.innerHTML = inputValue;
  inputField.innerHTML = "";

})
