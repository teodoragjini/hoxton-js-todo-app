let id = 1;
let state = {
  todos: [
    
  ],

  show_completed: true,
};

function createTodo() {
  state.todos.unshift({
    id: id,
    text: document.add_form.text.value,
    completed: false,
  });

  id++;

  renderTodos();
}

function deleteTodo(e) {
  state.todos = state.todos.filter(
    (state) => state.id != e.currentTarget.parentNode.parentNode.id
  );

  renderTodos();
}

function completeTodo(e) {
  let index = state.todos.findIndex(
    (todo) => todo.id == e.target.parentNode.parentNode.id
  );

  if (e.currentTarget.checked) {
    state.todos[index].completed = true;
  } else {
    state.todos[index].completed = false;
  }

  renderTodos();
}

function renderTodos() {
  render(getInCompletedTodos(), ".todo-list");
  render(getCompletedTodos(), ".completed-list");
}

function render(todos, listClass) {
  let list = document.querySelector(listClass);
  list.innerHTML = "";

  for (let todo of todos) {
    let li = document.createElement("li");
    li.id = todo.id;
    if (todo.completed) {
      li.className = "todo completed";
    } else {
      li.className = "todo";
    }

    let completedSection = document.createElement("div");
    completedSection.className = "completed-section";

    let checkbox = document.createElement("input");
    checkbox.className = "completed-checkbox";
    checkbox.type = "checkbox";
    if (todo.completed) {
      checkbox.checked = true;
    }
    checkbox.addEventListener("change", (e) => completeTodo(e));

    completedSection.append(checkbox);

    let textSection = document.createElement("div");
    textSection.className = "text-section";

    let pText = document.createElement("p");
    pText.className = "text";
    pText.textContent = todo.text;
    textSection.append(pText);

    let buttonSection = document.createElement("div");
    buttonSection.className = "button-section";

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", (e) => deleteTodo(e));
    buttonSection.append(deleteButton);

    li.append(completedSection, textSection, buttonSection);

    list.appendChild(li);
    document.add_form.text.value = "";
  }
}

function getCompletedTodos() {
  return state.todos.filter((todo) => todo.completed === true);
}

function getInCompletedTodos() {
  return state.todos.filter((todo) => todo.completed === false);
}

function toggleCompletedSection(e) {
  let el = document.getElementsByTagName("section")[3];

  if (e.currentTarget.checked) {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}
