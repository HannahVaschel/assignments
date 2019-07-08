import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends Component {
    constructor(){
        super()
        this.state = {
            die1: {num: 0, selected: false, dieNum: "die1"}, 
            die2: {num: 0, selected: false, dieNum: "die2"}, 
            die3: {num: 0, selected: false, dieNum: "die3"}, 
            die4: {num: 0, selected: false, dieNum: "die4"},
            die5: {num: 0, selected: false, dieNum: "die5"},
            
            // dieClass1: "",
            // dieClass2: "",
            // dieClass3: "",
            // dieClass4: "",
            // dieClass5: "",
        }
    }

    roll = (num) => {
        return Math.floor(Math.random() * num) + 1
    }

    rollDice = (e) => {
        const allValues = Object.values(this.state)
        console.log(allValues.filter(die => die.selected === false))
        this.setState(prevState => ({
            die1: {...prevState.die1, num: this.roll(6)},
            die2: {...prevState.die2, num: this.roll(6)},
            die3: {...prevState.die3, num: this.roll(6)},
            die4: {...prevState.die4, num: this.roll(6)},
            die5: {...prevState.die5, num: this.roll(6)},
        }))

    }


    // selectDie = (dClass) => {
    //     if (dClass === 'n1'){
    //         this.setState({
    //             dieClass1: this.state.dieClass1 === "selected" ? "" : "selected"
    //         })
    //     } else if (dClass === 'n2'){
    //         this.setState({
    //             dieClass2: this.state.dieClass2 === "selected" ? "" : "selected",
    //         })
    //     } else if (dClass === 'n3'){
    //         this.setState({
    //             dieClass3: this.state.dieClass3 === "selected" ? "" : "selected",
    //         })
    //     } else if (dClass === 'n4'){
    //         this.setState({
    //             dieClass4: this.state.dieClass4 === "selected" ? "" : "selected",
    //         })
    //     } else if (dClass === 'n5'){
    //         this.setState({
    //             dieClass5: this.state.dieClass5 === "selected" ? "" : "selected",
    //         })
    //     } 
    // }

    selectDie = (e, dieNum) => {
        // let isSelected = this.state.selected
        console.log(this.state.die1.selected)
        this.setState(prevState => ({
            [dieNum]: {...prevState[dieNum], selected: !this.state[dieNum].selected },
        }))
    }

    render(){
        const diceArr = [this.state.die1, this.state.die2, this.state.die3, this.state.die4, this.state.die5]
        const mappedDice = diceArr.map((die, i) => <Die
                                                    key={"die" + i}
                                                    {...die}
                                                    selectDie={this.selectDie}
                                                    />)

        return(
            <div className="dice-box">
                {mappedDice}
                <button onClick={this.rollDice}>Roll Dice</button>
            </div>
        )
    }
}

export default DiceBox