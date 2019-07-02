import React, {Component} from 'react'
import Square from './Square.js'
import Controls from './Controls.js'



class App extends Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    blackAndWhite = () => {
        let newColor
        if (this.state.colors[0] !== "white"){
            newColor = "white"
        } else {
            newColor = "black"
        }
        this.setState({
            colors: [newColor, newColor, newColor, newColor]
        })
    }
    // const [color1, color2, color3, color4] = this.state.colors
    
    
    topHalfPurple = () => {
        this.setState({
            colors: ["purple", "purple", this.state.colors[2], this.state.colors[3]]
        })
    }

    lowerLeftBlue = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], "blue", this.state.colors[3]]
        })
    }
    lowerRightBlue = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "blue"]
        })
    }

    // Random Color Generator for last 4 buttons
    colorizer = () => {
        const colorArray = ["red", "yellow", "green", "orange", "deeppink"]
        const randomColor = Math.floor(Math.random() * colorArray.length)
        return colorArray[randomColor]
    }

    topLeft = () => {
        let newColor = this.colorizer()
        const colorArray = ["red", "yellow", "green", "orange", "deeppink", "red"]
                  // extra addition of red at the end is hardcoded/lazy way to let repeated deeppink "loop" back around with less math/logic
        if (this.state.colors[0] === newColor){
            newColor = colorArray[colorArray.indexOf(this.state.colors[0]) + 1]
            // prevents display of same color twice in a row from colorizer
        }
        this.setState({
            colors: [newColor, this.state.colors[1], this.state.colors[2], this.state.colors[3]]
        })
    }
    topRight = () => {
        let newColor = this.colorizer()
        const colorArray = ["red", "yellow", "green", "orange", "deeppink", "red"]
        if (this.state.colors[1] === newColor){
            newColor = colorArray[colorArray.indexOf(this.state.colors[0]) + 1]
        }
        this.setState({
            colors: [this.state.colors[0], newColor, this.state.colors[2], this.state.colors[3]]
        })
    }
    bottomLeft = () => {
        let newColor = this.colorizer()
        const colorArray = ["red", "yellow", "green", "orange", "deeppink", "red"]
        if (this.state.colors[2] === newColor){
            newColor = colorArray[colorArray.indexOf(this.state.colors[0]) + 1]
        }
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], newColor, this.state.colors[3]]
        })
    }
    bottomRight = () => {
        let newColor = this.colorizer()
        const colorArray = ["red", "yellow", "green", "orange", "deeppink", "red"]
        if (this.state.colors[3] === newColor){
            newColor = colorArray[colorArray.indexOf(this.state.colors[0]) + 1]
        }
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], newColor]
        })
    }



    render(){
        return(
            <div className="square-container">
                <h1 className="header">DJ REACT</h1>
                <Square color={this.state.colors[0]}/>
                <Square color={this.state.colors[1]}/>
                <Square color={this.state.colors[2]}/>
                <Square color={this.state.colors[3]}/>
                <div className="controls">
                    <Controls 
                        blackAndWhite={this.blackAndWhite}
                        topHalfPurple={this.topHalfPurple}
                        lowerLeftBlue={this.lowerLeftBlue}
                        lowerRightBlue={this.lowerRightBlue}
                        topLeft={this.topLeft}
                        topRight={this.topRight}
                        bottomLeft={this.bottomLeft}
                        bottomRight={this.bottomRight}/>
                </div>
            </div>
        )
    }

}

export default App