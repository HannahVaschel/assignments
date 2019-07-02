import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            array: [],
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const newName = {
            name: this.state.name
        }
        this.setState(prevState => ({
            name: "",
            array: [...prevState.array, newName]
        }))
    }

    
    render(){

        const mappedNames = this.state.array.map((name, i) => <li key={name + i}>{name.name}</li>)
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    <button>Add Name</button>
                </form>
    
                <h1>{this.state.name}</h1>
                <ul>
                    {mappedNames}
                </ul>
            </div>
        )
    }
}

export default App