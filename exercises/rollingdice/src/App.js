import React, { Component } from 'react'
import DiceBox from './DiceBox.js'

class App extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         num1: 0,
    //         num2: 0,
    //         num3: 0,
    //         num4: 0,
    //         num5: 0,
    //         dieClass1: "",
    //         dieClass2: "",
    //         dieClass3: "",
    //         dieClass4: "",
    //         dieClass5: "",
    //     }
    // }

    // roll = (num) => {
    //     return Math.floor(Math.random() * num) + 1
    // }

    // rollDice = () => {
    //     this.setState({
    //         num1: this.roll(6),
    //         num2: this.roll(6),
    //         num3: this.roll(6),
    //         num4: this.roll(6),
    //         num5: this.roll(6)
    //     })
    // }

    // selectDie = () => {
    //     this.setState({
    //         dieClass1: this.state.dieClass1 === "selected" ? "" : "selected",
    //         dieClass2: this.state.dieClass2 === "selected" ? "" : "selected",
    //         dieClass3: this.state.dieClass3 === "selected" ? "" : "selected",
    //         dieClass4: this.state.dieClass4 === "selected" ? "" : "selected",
    //         dieClass5: this.state.dieClass5 === "selected" ? "" : "selected"
    //     })
    // }


    render(){
        return(
            <div>
                <DiceBox />

                {/* <button onClick={this.rollDice}>Roll Dice</button> */}
            </div>

        )
    }
}




export default App