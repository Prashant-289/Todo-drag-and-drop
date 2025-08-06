const addButton = document.querySelector(".btn");
const taskInput = document.getElementById("task");
const todoBox = document.querySelector(".box");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newCard = document.createElement("div");
    newCard.classList.add("cards");
    newCard.innerHTML = `<h3>${taskText}</h3>`;

    todoBox.appendChild(newCard);

    taskInput.value = "";
  }
});
