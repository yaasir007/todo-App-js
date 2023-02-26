const btn = document.querySelector(".btnSubmit");
const todoContainer = document.querySelector(".items");

btn.addEventListener('click', () => {
  const inputValue = document.querySelector(".field").value;
  if (inputValue === '') {
    console.log("Please add an item");
  }

  todoContainer.textContent = inputValue;

})
