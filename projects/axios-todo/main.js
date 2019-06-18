const todoDiv = document.getElementById("todo-container")

axios.get("https://api.vschool.io/hannahvaschel/todo")
.then(response => {
    const todos = response.data
    listTodos(todos)
})
.catch(error =>{
    console.log(error)
})


function listTodos(obj){
    const h2 = document.createElement('h2')
    h2.textContent= obj.title
    todoDiv.appendChild(h2)
}
