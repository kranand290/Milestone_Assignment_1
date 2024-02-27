function addItem() {
  const items = document.querySelector("#items");
  const todoItems = document.querySelector("#todoItems");

  const todoText = items.value.trim();

  if (todoText !== "") {
    const newTodoItems = document.createElement("li");
    newTodoItems.textContent = todoText;
    todoItems.appendChild(newTodoItems);
    items.value = "";
  }
}

const addBtn = document.querySelector("#btn");

addBtn.addEventListener("click", addItem);
