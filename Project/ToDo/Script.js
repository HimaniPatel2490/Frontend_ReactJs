const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Click to mark as done
  li.addEventListener("click", () => {
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  // Double click to remove
  li.addEventListener("dblclick", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
