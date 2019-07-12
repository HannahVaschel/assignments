import { Component } from 'react'

// todo: sort out timing information, make usable with both BoilTimer and MashTimer

// ! Timing functionality logic ONLY here!

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: 0,
            inputs: props.inputs
        }
        this.firstInterval = null
        this.secondInterval = null
        
    }
    

    addTime = () => {
        this.setState({
            time: this.state.time + 1
        })
        if (this.state.time === 10){
            clearInterval(this.firstInterval)
            this.flavorHops(this.state.flavorHops)
        }else if (this.state.time === 15){
            clearInterval(this.secondInterval)
        }
    }
    
// ? how do I store/maintain hopSchedule array when I can only pass it ONCE upon clicking start timer button?

    hopAdditions = (hopSchedule) => {
        const bitterHops = hopSchedule[0]
        const flavorHops = hopSchedule[1]
        const aromaHops = hopSchedule[2]
        this.setState({
            bitterHops: bitterHops,
            flavorHops: flavorHops,
            aromaHops: aromaHops,
        })
    
        alert(`Add your ${bitterHops} now.`)
        this.firstInterval = setInterval(this.addTime, 1000)
        
        if (this.state.time === 10){
            alert(`Add your ${flavorHops} now.`)
            this.secondInterval = setInterval(this.addTime, 1000)
            clearInterval(this.firstInterval)
        } else if (this.state.time === 15){
            alert( `Add your ${aromaHops} now.`)
            clearInterval(this.secondInterval)
        }


        
    }


    bitterHops = (hopSchedule) => {
        const bitterHops = hopSchedule[0]

        alert(`Add your ${bitterHops} now.`)
        this.firstInterval = setInterval(this.addTime, 1000)
    } 

    flavorHops = (flavorHops) => {
        alert (`Add your ${flavorHops} hops now.`)
        this.secondInterval = setInterval(this.addTime, 1000)
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submit(this.state.inputs)
    }


    render(){
        console.log(this.state.time)

        return this.props.render({
            inputs: this.state.inputs,
            handleChange :this.handleChange,
            handleSubmit: this.handleSubmit,
            hopAdditions: this.hopAdditions,
            bitterHops: this.bitterHops,
            time: this.state.time

        })
    }
}

export default Timer