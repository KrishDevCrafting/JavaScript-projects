// Accessing DOM elements
const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

// Function to add a new task
addTodoButton.addEventListener("click", () => {
  const task = todoInput.value.trim(); // Get input value
  if (task === "") {
    alert("Task cannot be empty!"); // Prevent empty tasks
    return;
  }

  // Create list item
  const listItem = document.createElement("li");
  listItem.textContent = task;

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(listItem); // Delete task logic
  });

  // Append delete button to list item
  listItem.appendChild(deleteButton);

  // Append list item to the todoList
  todoList.appendChild(listItem);

  // Clear input field
  todoInput.value = "";
});
