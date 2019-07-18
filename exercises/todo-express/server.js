const express = require('express')
const app = express()

let todos = [
    { 
        name: "First Todo", 
        description: "this is the very first one!", 
        image_url: "https://images.unsplash.com/photo-1556229040-2a7bc8a00a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", 
        completed: false, 
        _id: `${Math.random().toString()}` 
    },{ 
        name: "Don't spill your drink!", 
        description: "what a party foul", 
        image_url: "https://images.unsplash.com/photo-1563297871-fbbf4e345a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", 
        completed: false, 
        _id: `${Math.random().toString()}`
    },{ 
        name: "Here's another thing", 
        description: "they just keep coming", 
        image_url: "https://images.unsplash.com/photo-1563305135-51670e86b863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", 
        completed: false, 
        _id: `${Math.random().toString()}`
    },{ 
        name: "Trees are nice", 
        description: "Yes. Good.", 
        image_url: "https://images.unsplash.com/photo-1563303042-b9fe51ff7227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", 
        completed: false, 
        _id: `${Math.random().toString()}` 
    }
]

app.use(express.json())

app.get("/todos", (req, res) => {
    res.send(todos)
})

app.get("/todos/:_id", (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})

app.post("/todos", (req, res) =>{
        // grab user's POST object 
    const newTodo = req.body
        // add an _id to the object
    newTodo._id = Math.random().toString()
        //add the new object to the collection in the fake db
    todos.push(newTodo)
        //send back the new todo once it's been added
    res.send(newTodo)
})

app.put("/todos/:_id", (req, res) => {
        // find todo by _id
        const foundTodo = todos.find(todo => todo._id === req.params._id)
        //save update object from the user in a variable
        const updateObj = req.body
        // use Object.assign() to update
        const updatedTodo = Object.assign(foundTodo, updateObj)
        // loop through db and replace updated object with endpoint
        const updatedDB = todos.map(todo => todo._id === req.params.id ? updatedTodo : todo)
        // update fake db
        todos = updatedDB
        // send updated todo back to client!
        res.send(updatedTodo) 
})

app.delete(("/todos/:_id"), (req, res) => {
    // find todo listed in params
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    // loop through and find todo to remove from array
    const updatedTodos = todos.filter(todo => todo._id !== req.params._id)
    // update fake db
    todos = updatedTodos
    // send successful delete message
    res.send(`${foundTodo.name} has been removed from the Database`)
})


app.listen(7000, () => {
    console.log("Server is working on Port 7000")
})