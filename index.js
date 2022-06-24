let state = {
    todos: [
      {
        text: 'Go Shopping',
        completed: false,
      },
      {
        text: 'Work out',
        completed: false,
      },
      {
        text: 'See the doctor',
        completed: true,
      },
      {
        text: 'Learn Js',
        completed:true
      },
    ],
    showCompleted: true,
  }
  
  function renderApp() {
    let appEl = document.createElement('div')
    appEl.className = 'app'
    document.body.append(appEl)
  }
  
  function renderOptionsSection() {

   // <section class="options">
  // <h2 class="sec-title">Options</h2>
  // <label>
  //     Show Completed
  //     <input type="checkbox" />
  // </label>
// </section>

    let optionsSection = document.createElement('section')
    optionsSection.className = ('options')
  
    let optionsTitle = document.createElement('h2')
    optionsTitle.className = ('sec-title')
    optionsTitle.innerText = 'Options'
  
    let showCompletedLabel = document.createElement('label')
  
    let showCompletedInput = document.createElement('input')
    showCompletedInput.type = 'checkbox'
  
    showCompletedLabel.append('Show completed', showCompletedInput)
    optionsSection.append(optionsTitle, showCompletedLabel)
  
    let appEl = document.querySelector('.app')
    appEl?.append(optionsSection)
  }
  
  function renderAddTodoSection() {
    //     <section class="add-item">
    //       <h2 class="sec-title">Add Item</h2>
    //       <form>
    //         <input type="text" />
    //         <button>Add</button>
    //       </form>
    //     </section>
  }
  
 
  function renderCompletedTodosSection() {
    //     <section>
    //       <h2 class="sec-title">Completed</h2>
    //       <ul class="completed-todo-list">
    //         <li class="todo completed">
    //           <input type="checkbox" checked />
    //           <p>See the doctor</p>
    //           <button>Delete</button>
    //         </li>
    //       </ul>
    //     </section>

    let section =document.createElement("section")
    let titleEl = document.createElement('h2')
    titleEl.className = "sec-title"
    titleEl.textContent = "Completed"

    let ul = document.createElement("ul")
    ul.className = "completed-todo-list"
     
    section.appendChild(titleEl,ul)


  } 
  
  function render() {
    document.body.textContent = ''

    renderApp()
    renderOptionsSection()
  }

  render()

  function toggleShowCompleted() {
    state.showCompleted = !state.showCompleted
    render()
  }