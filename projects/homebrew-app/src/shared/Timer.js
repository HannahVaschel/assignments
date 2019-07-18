import { Component } from 'react'

// ! Timing functionality logic ONLY here!


class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: 0,
            inputs: props.inputs,
            
            mashMinutes: 0,
            mashSeconds: 0,
            boilMinutes: 0,
            boilSeconds: 0,
        }
        this.mashInterval = null
        this.mashDisplay = null
        this.boilDisplay = null
        this.boilInterval = null
        // this.firstInterval = null
        // this.secondInterval = null
        
    }

// * ************************** Mash Timer ************************** 

    startMash = (duration) => {
        this.setState({
            mashMinutes: duration,
            
        })
        
        this.mashInterval = setInterval(this.mashCountDown, 1000)
        this.mashDisplay = setInterval(this.timeDisplay, 1000)
    }

    mashCountDown = () => {
        const { mashMinutes, mashSeconds } = this.state
        this.setState({
            mashSeconds: mashSeconds - 1
        })

        if (this.state.mashSeconds === -1){
            this.setState({
                mashMinutes: mashMinutes - 1,
                mashSeconds: 59
            })
        }
        if (this.state.mashMinutes === 0 && this.state.mashSeconds === 0){
            alert("End Mash, Begin Sparge")
            clearInterval(this.mashInterval)
        }
    }

    endMash = () => {
        clearInterval(this.mashInterval)
        this.setState({
            mashMinutes: 0,
            mashSeconds: 0,
        })
    }

    mashTimeDisplay = () => {
        const { mashMinutes, mashSeconds } = this.state
        let secDisplay
        let minDisplay  
        if (this.state.mashSeconds === -1){
            this.setState({
                mashMinutes: mashMinutes - 1,
                mashSeconds: 59
            })
        }
    
        mashSeconds < 10 ? secDisplay = `0${mashSeconds}`: secDisplay = mashSeconds
        mashMinutes < 10 ? minDisplay = `0${mashMinutes}` : minDisplay = mashMinutes

        return (minDisplay + ":" + secDisplay )        
    }

// * ************************** Boil Timer ************************** 

    // addTime = () => {
    //     const { time, whichTimer } = this.state

    //     this.setState({
    //         time: time + 1
    //     })
    //     if (time === 10 ){
    //         clearInterval(this.firstInterval)
    //         this.secondHopAddition(this.state.flavorHops)
    //     }else if (time === 15 ){
    //         clearInterval(this.secondInterval)
    //         alert(`Add your ${this.state.aromaHops} hops now. Flame out.`)
    //         this.setState({ time: 0})
    //     } 

    //     if (time === this.state.mashTime && whichTimer === "mash"){
    //         alert(`Mash Completed, begin Sparge`)
    //         clearInterval(this.mashInterval)
    //         this.setState({ time: 0})
    //     }
    // }
    
    startBoil = (hopSchedule) => {
        console.log("timer started")
        const bitterHops = hopSchedule[0]
        const flavorHops = hopSchedule[1]
        const aromaHops = hopSchedule[2]
   
        const { boilMinutes} = this.state
        const { totalTime } =this.state.inputs
        console.log(boilMinutes)
        console.log(this.state.inputs)
        this.setState({
            bitterHops: bitterHops,
            flavorHops: flavorHops,
            aromaHops: aromaHops,
            // this.state.boilSeconds: totalTime,  // * uncomment for test case
            boilMinutes: totalTime

        }, () => console.log(this.state.boilMinutes))

    
        alert(`Add your ${bitterHops} hops now.`)
        this.boilInterval = setInterval(this.boilCountDown, 1000)
        this.boilDisplay = setInterval(this.boilTimeDisplay, 1000)
    }

    boilCountDown = () => {
        const { boilMinutes, boilSeconds } = this.state
        const { flavoring, aroma } =this.state.inputs
        this.setState({
            boilSeconds: boilSeconds - 1
        })

        if (boilSeconds === 0){
            this.setState({
                boilMinutes: boilMinutes - 1,
                boilSeconds: 59
            })
        }

        if (boilMinutes === flavoring && boilSeconds === 0 && this.state.flavorHops.length !== 0){
        // if (boilSeconds === flavoring /*&& boilSeconds === 0*/ && this.state.flavorHops.length !== 0){ // *uncomment for test case
            alert(`Add your ${this.state.flavorHops} hops now`)
        } else if (boilMinutes === aroma + 1 && boilSeconds === 0 && this.state.aromaHops.length !== 0){
        // } else if (boilSeconds === aroma + 1 /*&& boilSeconds === 0*/ && this.state.aromaHops.length !== 0){ // * uncomment for test case
            alert(`Add your ${this.state.bitterHops} hops now. Flame Out`)
            clearInterval(this.boilInterval)
            clearInterval(this.boilDisplay)
        } 
    }

    boilTimeDisplay = () => {
        const { boilMinutes, boilSeconds } = this.state
        let secDisplay
        let minDisplay  
        if (this.state.boilSeconds === -1){
            this.setState({
                boilMinutes: boilMinutes - 1,
                boilSeconds: boilSeconds - 1
            })
        }
        
        boilSeconds < 10 ? secDisplay = `0${boilSeconds}`: secDisplay = boilSeconds
        boilMinutes < 10 ? minDisplay = `0${boilMinutes}` : minDisplay = boilMinutes

        return (minDisplay + ":" + secDisplay )        
    }

    // secondHopAddition = (flavorHops) => {
    //     alert (`Add your ${flavorHops} hops now.`)
    //     this.secondInterval = setInterval(this.addTime, 1000)
    // }

    endBoil = () => {
        clearInterval(this.boilInterval)
        clearInterval(this.boilDisplay)
        this.setState({
            boilMinutes: 0,
            boilSeconds: 0
        })
    }


// * ************************** Handle Business **************************     

    componentDidUpdate(prevProps){
        if (prevProps.inputs.totalTime !== this.props.inputs.totalTime){
            this.setState({
                inputs: {...this.props.inputs}
            }, () => console.log(this.state.inputs))
        }
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
        this.setState({inputs: this.props.inputs})
    }


    render(){
        // console.log(this.state.inputs)
    
        return this.props.render({
            inputs: this.state.inputs,
            handleChange :this.handleChange,
            handleSubmit: this.handleSubmit,
            startBoil: this.startBoil,
            startMash: this.startMash,
            mashSeconds: this.state.seconds,
            mashMinutes: this.state.minutes,
            mashTimeDisplay: this.mashTimeDisplay,
            boilTimeDisplay: this.boilTimeDisplay,
            endMash: this.endMash,
            endBoil: this.endBoil,
            
    
            time: this.state.time

        })
    }
}

export default Timer