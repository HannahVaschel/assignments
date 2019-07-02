import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            randColor: ""
        }
    }

    getColor = () => {
        axios.get("http://www.colr.org/json/color/random")
            .then(res => {
                this.setState({
                    randColor: res.data.new_color
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        const hexCode = "#" + this.state.randColor
        return(
            <div>
                <div style={{backgroundColor: hexCode, width: 300, height: 300, border: "1px solid black"}}></div>
                <button onClick={this.getColor}>Get Random Color</button>
                <p>Use this Hex Code: {hexCode}</p>
            </div>
        )
    }
}

export default App