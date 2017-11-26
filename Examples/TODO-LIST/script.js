
// todoList is an object 
var todoList = {
    todos: [],
    displayTodos: function(){
        // this keyword refers to itslef on the object
        console.log('My todos:', this.todos);
    },
    addTodo: function(todoText){
        this.todos.push({ // passing objects
            todoText: todoText, //text
            completed: false //boolean
        })
        this.displayTodos() 
    },
    changeTodo: function(position, todoText){
        // this.todos[position] = todoText
        this.todos[position].todoText = todoText
        this.displayTodos()
    },
    deleteTodo: function(position){
       this.todos.splice(position, 1)
       this.displayTodos()
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos()
    }
};

todoList.addTodo('boolean testing')
todoList.toggleCompleted(0)







