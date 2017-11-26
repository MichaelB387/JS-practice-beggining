
// variable created called todos which is an array
var todos = ['item 1','item 2', 'item 3']

// This function will display the todos
function displayTodos() {
  console.log('My Todos:',todos)
}

// This function will add a new todo to the todos []
function addTodos(todo) {
  todos.push(todo)
  displayTodos()
}

// This function will change the value in the array at a selected position
function changeTodo(position, newValue) {
  todos[position] = newValue
  displayTodos()
}

//This function will delete a todo at a slected position
function deleteTodo(position){
    todos.splice(position, 1)
    displayTodos()
}

// Prints the todos array to the console
console.log(todos)







