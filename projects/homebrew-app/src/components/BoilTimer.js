import React, { Component } from 'react'

// todo: fix broken stuff:
    // todo: setTimes doesn't populate hopTimes array
    


class BoilTimer extends Component {
    constructor(){
        super()
        this.state = {
            times: [60, 60, 30, 0]
        }
    }

    // setTimes = (arr) => {
    //     // will always be sent the array of hops for a recipe
    //     const { value } = this.props.method.fermentation.temp
    //     const hopTimes = []
    //     const additionTimes = []

    //     for (let i = 0; i < arr.length; i++){
    
    //         console.log(arr[i].add)
    //         if (!isNaN(Number(arr[i].add))) {
    //             hopTimes.push(Number(arr[i].add))
    //         }
    //     }
        
    //     console.log(hopTimes)
    //     if (hopTimes.length > 0){
    //         for (let i = 0; i < hopTimes.length; i++){
    //             if (additionTimes.indexOf(hopTimes[i]) === -1){
    //                 additionTimes.push(hopTimes[i]) 
                    
    //             }
    //         }
    //     }
    //     console.log(additionTimes)
    //     if (value >= 15 && additionTimes.length > 0){
    //         this.setState({ times: [60, ...additionTimes]})
    //     } else if ( value >= 15 && additionTimes.length === 0){
    //         this.setState({ times: [60, 60, 30, 0]})
    //     } else if (value < 15 && additionTimes.length > 0){
    //         this.setState({ times: [90, ...additionTimes]})
    //     } else this.setState({ times: [90, 60, 30, 0]}) 
    // }

    
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


    
    render(){
        if (!this.props.beers[0].ingredients){
            return null
        }
        // console.log(this.props.beers[0].ingredients.hops)
        const { hops } = this.props.beers[0].ingredients
        const { handleChange, handleSubmit, inputs: { totalTime, bittering, flavoring, aroma } } = this.props
        console.log(this.hopSchedule(hops))
        // console.log(this.props.method.fermentation.temp.value)
        // console.log(this.state)
        const { value } = this.props.method.fermentation.temp
        console.log(hops)
        


        return(
            
                <form className="boil-timer" onSubmit={handleSubmit}>
                    <div className="boil-input">
                        <input type="number" name="totalTime" value={this.props.inputs.totalTime} onChange={handleChange}></input>
                        <span>Total Time</span>
                    </div>
                    <div className="boil-input">
                        <input type="number" name="bittering" value={this.props.inputs.bittering} onChange={handleChange}></input>
                        <span>First Addition</span>
                    </div>
                    <div className="boil-input">
                        <input type="number" name="flavoring" value={this.props.inputs.flavoring} onChange={handleChange}></input>
                        <span>Second Addition</span>
                    </div>
                    <div className="boil-input">
                        <input type="number" name="aroma"     value={this.props.inputs.aroma} onChange={handleChange}></input>
                        <span>Third Addition</span>
                    </div>
                    
                    {/* <button onClick={() => this.props.setTimes(hops)}>Initiate Timer</button> */}
                    <button onClick={() => this.props.startBoil(this.hopSchedule(hops))}>Start Timer</button>
                    <button onClick={this.props.endBoil}>Clear Timer</button>
                    <p>{this.props.boilTimeDisplay()}</p>
                </form>
        )
    }
}

export default BoilTimer