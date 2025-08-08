const addButton = document.querySelector(".btn");
const taskInput = document.getElementById("task");
const todoBox = document.querySelector(".box");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newCard = document.createElement("div");
    newCard.classList.add("cards");
    newCard.innerHTML = `<h3>${taskText}</h3>`;
    makeDraggable(newCard);
    todoBox.appendChild(newCard);
    taskInput.value = "";
  }
});

const cards = document.querySelectorAll(".cards");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e, card) {
  e.dataTransfer.setData("text/plain", this.id);
  this.classList.add("over");
  this.classList.add("dragging");
}

function dragEnd() {
  console.log("Drag ended");
  this.classList.remove("over");
  this.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);

  this.appendChild(card);
  this.classList.remove("over");
}
function makeDraggable(card) {
  if (!card.id) {
    card.id = "card-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
  }
  card.setAttribute("draggable", "true");
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}
