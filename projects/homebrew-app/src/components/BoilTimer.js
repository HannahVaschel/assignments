import React, { Component } from 'react'

// todo: use render props to make this a functional component that gathers and sorts information

// todo: sort hop information, create schedule info to be utilized by Timer.js



// ! Hop schedule info ONLY here!


class BoilTimer extends Component {
    constructor(){
        super()
        this.state = {
            time: 0
        }
    }

    
    // const { hops, malt, yeast } = this.props.ingredients


    
    hopSchedule = (arr) => {
        const flavorArr = []
        const bitterArr = []
        const aromaArr = []
        const hopScheduleArr = []
        for (let i = 0; i < arr.length; i++){
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
        const { hops } = this.props.ingredients
        const { handleChange, handleSubmit, } = this.props
        console.log(this.props)
        console.log(this.hopSchedule(hops))
        
        

        return(
            
                <form onSubmit={handleSubmit}>
                    <input type="number" name="bittering" value={60} onChange={handleChange}></input>
                    <input type="number" name="flavoring" value={30} onChange={handleChange}></input>
                    <input type="number" name="aroma" value={0} onChange={handleChange}></input>

                    
                    <button onClick={() => this.props.startBoil(this.hopSchedule(hops))}>Start Timer</button>
                    <p>{this.props.time}</p>
                </form>
        )
    }
}

export default BoilTimer