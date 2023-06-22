class Task {
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  get getTasks() {
    return this.tasks;
  }
}

// Crear instancia del administrador de tareas
const taskManager = new TaskManager();

// Lógica de interacción con el DOM
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskDescInput = document.getElementById("task-description");
const taskDueDateInput = document.getElementById("task-due-date");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = taskNameInput.value;
  const description = taskDescInput.value;
  const dueDate = taskDueDateInput.value;
  const task = new Task(name, description, dueDate);
  taskManager.addTask(task);
  renderTasks();
  taskForm.reset();
});

function renderTasks() {
  taskList.innerHTML = "";
  const tasks = taskManager.getTasks();
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompleted(${i})">
      <span>${task.name}</span>
      <button onclick="removeTask(${i})">Eliminar</button>
    `;
    taskList.appendChild(listItem);
  }
}

function toggleTaskCompleted(index) {
  const task = taskManager.getTasks()[index];
  task.toggleCompleted();
  renderTasks();
}

function removeTask(index) {
  taskManager.removeTask(index);
  renderTasks();
}

renderTasks();
