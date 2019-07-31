import React, { Component } from 'react'

// todo: figure out why getRandomBeer() is NOT causing componentDidUpdate to run more than once per page refresh
// todo: sort out business with getAllBeers running on ALL screens on componentDidMount

class ReBoilTimer extends Component {
    constructor(){
        super()
        this.state = {
            times: [],
            boilMinutes: 0,
            boilSeconds: 0,
        }
        this.boilInterval = null
        this.boilDisplay = null
    }

    componentDidUpdate(){
        if (!this.props.beers[0].ingredients){
            return null
        } else if (this.state.times.length < 1 && this.props.beers.length === 1){
            this.setState({
                times: this.setTimes(this.props.beers[0].ingredients.hops)
            }, () => console.log(this.state.times))

        }

    }

    setTimes = (arr) => {
        // will always be sent the array of hops for a recipe
        const { value } = this.props.beers[0].method.fermentation.temp
        const hopTimes = []
        const additionTimes = []

        for (let i = 0; i < arr.length; i++){
    
            console.log(arr[i].add)
            if (!isNaN(Number(arr[i].add))) {
                hopTimes.push(Number(arr[i].add))
            }
        }
        
        if (hopTimes.length > 0){
            for (let i = 0; i < hopTimes.length; i++){
                if (additionTimes.indexOf(hopTimes[i]) === -1){
                    additionTimes.push(hopTimes[i]) 
                    
                }
            }
        }
        console.log(additionTimes)
        console.log(value)
        if (value >= 15 && additionTimes.length > 0){
            console.log(1)
            return  [60, ...additionTimes]
        } else if ( value >= 15 && additionTimes.length === 0){
            console.log(2)
            return [60, 60, 30, 0]
        } else if (value < 15 && additionTimes.length > 0){
            console.log(3)
            return [90, ...additionTimes]
        } else console.log(4) 
        return [90, 60, 30, 0] 
    }



    hopSchedule = (arr) => {
        const flavorArr = []
        const bitterArr = []
        const aromaArr = []
        const hopScheduleArr = []
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i].add)
            if (arr[i].add.toLowerCase() === 'start' || arr[i].add >= 60){
                bitterArr.push(arr[i].name)

            } else if (arr[i].add.toLowerCase() === 'middle' || (arr[i].add < 60 && arr[i].add > 9)){
                flavorArr.push(arr[i].name)

            } else if (arr[i].add.toLowerCase() === 'end' || arr[i].add == 0){
                aromaArr.push(arr[i].name)
            }
        } 
        hopScheduleArr.push(bitterArr, flavorArr, aromaArr)
        
        return hopScheduleArr
        
    }
   




    hopsSchedule = (arr) => {
        const flavorArr = []
        const bitterArr = []
        const aromaArr = []
        const hopScheduleArr = []
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i].add)
            if (arr[i].add.toLowerCase() === 'start' || arr[i].add >= 60){
                bitterArr.push(arr[i].name)

            } else if (arr[i].add.toLowerCase() === 'middle' || (arr[i].add < 60 && arr[i].add > 9)){
                flavorArr.push(arr[i].name)

            } else if (arr[i].add.toLowerCase() === 'end' || arr[i].add == 0){
                aromaArr.push(arr[i].name)
            }
        } 
        hopScheduleArr.push(bitterArr, flavorArr, aromaArr)
        
        return hopScheduleArr
        
    }



    startBoil = (hopSchedule) => {
        console.log("timer started")
        const bitterHops = hopSchedule[0]
        const flavorHops = hopSchedule[1]
        const aromaHops = hopSchedule[2]
   
        
        
        this.setState({
            bitterHops: bitterHops,
            flavorHops: flavorHops,
            aromaHops: aromaHops,
            // this.state.boilSeconds: totalTime,  // * uncomment for test case
            boilMinutes: this.state.times[0]
        })

    
        alert(`Add your ${bitterHops} hops now.`)
        this.boilInterval = setInterval(this.boilCountDown, 1000)
        this.boilDisplay = setInterval(this.boilTimeDisplay, 1000)
    }

    boilCountDown = () => {
        const { boilMinutes, boilSeconds } = this.state
        this.setState({
            boilSeconds: boilSeconds - 1
        })

        if (boilSeconds === 0){
            this.setState({
                boilMinutes: boilMinutes - 1,
                boilSeconds: 59
            })
        }

        if (boilMinutes === this.state.times[2] && boilSeconds === 0 && this.state.flavorHops.length !== 0){
        // if (boilSeconds === flavoring /*&& boilSeconds === 0*/ && this.state.flavorHops.length !== 0){ // *uncomment for test case
            alert(`Add your ${this.state.flavorHops} hops now`)
        } else if (boilMinutes === this.state.times[3] + 1 && boilSeconds === 0 && this.state.aromaHops.length !== 0){
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

    endBoil = () => {
        clearInterval(this.boilInterval)
        clearInterval(this.boilDisplay)
        this.setState({
            boilMinutes: 0,
            boilSeconds: 0
        })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { totalTime, bittering, flavoring, aroma } = this.state
        const newTimer = {
            totalTime: totalTime,
            bittering: bittering,
            flavoring: flavoring,
            aroma: aroma
        }

        this.setState({
            totalTime: 0,
            bittering: 0,
            flavoring: 0,
            aroma: 0
        })
    }

    render(){
        console.log(this.props.beers)
        const { totalTime, bittering, flavoring, aroma } = this.state
        if (!this.props.beers[0].ingredients){
            return null
        }
        const { hops } = this.props.beers[0].ingredients
        console.log(hops)
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="Number" name="totalTime" value={this.state.times[0]} onChange={this.handleChange} />
                <input type="Number" name="bittering" value={this.state.times[1]} onChange={this.handleChange} />
                <input type="Number" name="flavoring" value={this.state.times[2]} onChange={this.handleChange} />
                <input type="Number" name="aroma" value={this.state.times[3]} onChange={this.handleChange} />
                <p>{this.boilTimeDisplay()}</p>

                <button onClick={() => this.startBoil(this.hopsSchedule(hops))}>Start Timer</button>
                <button onClick={this.endBoil}>Clear Timer</button>
            </form>
        )
    }
}

export default ReBoilTimer