const btn = document.querySelector(".btnSubmit");
const todoContainer = document.querySelector(".items");
const inputField = document.querySelector(".field");
const btnDelete = document.querySelector(".delete");
const container = [];
btn.addEventListener('click', () => {
  const inputValue = document.querySelector(".field").value;
  if (inputValue === '') {
    console.log("Please add an item");
  }
  container.push(inputValue);

  container.forEach((element) => {
    todoContainer.innerHTML += element;
    btnDelete.style.display = "block";
    inputField.value = "";
  });

})
