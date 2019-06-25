const allTodos = document.getElementById("todo-container")

function getTodos(){
    axios.get("https://api.vschool.io/hannahvaschel/todo")
    .then(response => {
        const todos = response.data
        listTodos(todos)
    
    })
    .catch(error =>{
        console.log(error)
    })
}
getTodos()

////////////////////////////// Get //////////////////////////////

function listTodos(arr){
    allTodos.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
    // Create Elements
        const todoId = arr[i]._id
        const title = document.createElement('h1')
        const description = document.createElement('p')
        const todoDiv = document.createElement('div')
        const todoImg = document.createElement('img')
        const checkDone = document.createElement('input')
            if (arr[i].completed){
                title.style.textDecoration = "line-through"
                checkDone.checked = true
            }
        const checkLabel = document.createElement('label')
        const editBtn = document.createElement('button')
        const editImg = document.createElement('p')
        const delBtn = document.createElement('button')

        const checkDiv = document.createElement('div')
        const btnDiv = document.createElement('div')
        
    

    // Edit Elements
        title.textContent = arr[i].title
        description.textContent = arr[i].description
        description.classList.add("grid-desc")
        todoDiv.classList.add("todo-div")
        todoImg.src= arr[i].imgUrl
        editImg.textContent = arr[i].imgUrl
            if (!arr[i].imgUrl){
                editImg.textContent= "(add Image url)"
            }
        todoImg.classList.add("todo-img")
        checkDone.type = "checkbox"
        checkDone.name = "check-done"
        checkDone.id = "checkbox"
        checkLabel.textContent = "Done"
        checkLabel.setAttribute("for", checkDone)
        checkLabel.id = "check-label"
        delBtn.textContent = "Delete"
        editBtn.textContent = "Edit"
        editBtn.classList.add("edit-button")
        editImg.classList.add("hidden")
        
        checkDiv.classList.add("check-div")
        btnDiv.classList.add("btn-div")
        

    // Append to DOM
        todoDiv.appendChild(title)      
        todoDiv.appendChild(description)     
        if (todoImg.src= arr[i].imgUrl){
            todoDiv.appendChild(todoImg)
        }
        // todoDiv.appendChild(checkDone)
        // todoDiv.appendChild(checkLabel)
        // todoDiv.appendChild(editBtn)
        todoDiv.appendChild(editImg)
        // todoDiv.appendChild(delBtn)
        checkDiv.appendChild(checkDone)
        checkDiv.appendChild(checkLabel)
        btnDiv.appendChild(editBtn)
        btnDiv.appendChild(delBtn)

        todoDiv.appendChild(checkDiv)
        todoDiv.appendChild(btnDiv)


        allTodos.appendChild(todoDiv)



//////////// PUT ////////////
        checkDone.addEventListener("click", (e) => {
            axios.put(`https://api.vschool.io/hannahvaschel/todo/${todoId}`, {completed: !arr[i].completed})
            .then(response => getTodos())
            .catch(error => console.log(error))
                
        })

//////////// PUT Part 2 ////////////
        editBtn.addEventListener("click", e => {
            let newTitleText
            let newDescText
            let newImgText
            if (editBtn.classList.contains("edit-button")){
                todoDiv.setAttribute("id", "save-mode")
                title.setAttribute("contenteditable", true)

                description.setAttribute("contenteditable", true)
                editImg.setAttribute("contenteditable", true)
                title.setAttribute("id", "title-edited")
                description.setAttribute("id", "desc-edited")
                editImg.setAttribute("id", "img-edited")

                editBtn.textContent = "Save"
                editImg.classList.remove("hidden")
                // editImgDiv.removeAttribute("id", "hidden")
                editBtn.classList.remove("edit-button")

                

            } else  {
                todoDiv.removeAttribute("id", "save-mode")
                title.setAttribute("contenteditable", false)
                description.setAttribute("contenteditable", false)
                editImg.setAttribute("contenteditable", false)
                editBtn.textContent = "Edit"
                editImg.classList.add("hidden")
                // editImgDiv.setAttribute("id", "hidden")
                editBtn.classList.add("edit-button")
                
                newTitleText = document.getElementById("title-edited").textContent
                newDescText = document.getElementById("desc-edited").textContent
                if(document.getElementById("img-edited").textContent.includes("http") ){
                    newImgText = document.getElementById("img-edited").textContent
                } else {
                    newImgText = ""
                }
                
                const editedTodo = {
                    title: newTitleText,
                    description: newDescText,
                    imgUrl: newImgText
                }
        
                title.removeAttribute("id", "title-edited")
                description.removeAttribute("id", "desc-edited")
                editImg.removeAttribute("id", "img-edited")

                axios.put(`https://api.vschool.io/hannahvaschel/todo/${todoId}`, editedTodo)
                .then(response => {
                    getTodos()
                })
                .catch(error => console.log(error))
            }
        })

        

//////////// DELETE //////////////    
        delBtn.addEventListener("click", (e) =>{
            axios.delete(`https://api.vschool.io/hannahvaschel/todo/${todoId}`)
                .then(response => getTodos())
                .catch(error => console.log(error))
        })

    }
}

////////////////////////////// POST //////////////////////////////

const addForm = document.addTodoForm

addForm.addEventListener("submit", (event) => {
    event.preventDefault()
//Capture user input
    const newTitle = addForm.title.value
    const newDesc = addForm.description.value
    const newImgUrl = addForm.image.value
// compile into new object
    const newTodo = {
        title: newTitle,
        description: newDesc,
        imgUrl: newImgUrl
    }
//Post to database
    axios.post("https://api.vschool.io/hannahvaschel/todo", newTodo)
        .then(response => {
            getTodos()
            addForm.title.value = ""
            addForm.description.value = ""
            addForm.image.value = ""
        })
        .catch(error => console.log(error))
})
