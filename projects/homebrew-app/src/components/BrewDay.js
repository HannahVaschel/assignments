import React, { Component } from 'react'
import BoilTimer from './BoilTimer.js'
import Timer from '../shared/Timer.js'
import TileList from './TileList.js'
import MashTimer from './MashTimer.js'
import { withBeer } from '../context/BeerProvider.js'


class BrewDay extends Component {
    constructor(props){
        super(props)
        this.state = {
            times: ["", "", "", ""],
            beerArr: {
                beers: [
                    {
                        abv: "", 
                        id: "", 
                        ingredients: {hops: [] }, 
                        method: {
                            fermentation: {
                                temp: ""
                            }, 
                            mash_temp: [
                                {
                                    temp: {
                                        value: ""
                                    }, 
                                    duration: "" 
                                }
                            ]
                        } 
                    } 
                ]
            }
        }
    }

    componentDidUpdate(prevProps){
        console.log(this.props.beers)
       if (this.props.beers.length && prevProps.beers.beers !== undefined && this.props.beers.beers[0].id !== prevProps.beers.beers[0].id){ 
            const { hops } = this.props.beers.beerArr.beers[0].ingredients
            const times = this.setTimes(hops)
            this.setState({
               beerArr: this.props.beers,
                times: times,
          }, () => console.log(this.state.times))
            
          
       }
    }

    setTimes = (arr) => {
        // will always be sent the array of hops for a recipe
        const { value } = this.state.beerArr.beers[0].method.fermentation.temp
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
    

            
    render(){
        const {beers} = this.state.beerArr
        console.log(this.state.beerArr.beers[0])
        // console.log(beers[0].ingredients)
        const { hops } = this.state.beerArr.beers[0].ingredients
        console.log(hops)
        console.log(this.state.times)
        const actualBeerArray = Object.values(this.props.beers)



        return(
            <div className="brewday-div">
                <button className="random-beer" onClick={this.props.getRandomBeer}>Get Random Beer</button>
                <TileList beers={actualBeerArray}/>
              
               <div className="timer-div">
                    <div className="mash-timer-div">
                        <h1>Mash Timer</h1>
                        
                        <Timer 
                            inputs={{ mashTime: "" }}
                            submit={(inputs) => alert("Begin Mash")}
                            render={(timerProps) => beers.map(beer =>  
                                                        <MashTimer {...timerProps} key={beer.id} {...beer}/> 
                            )}                        
                        />
                    </div>
    
                    <div className="boil-timer-div">
                        <h1>Boil Timer</h1>
                      
                        <Timer 
                            inputs={{ totalTime: this.state.times[0], bittering: this.state.times[1], flavoring: this.state.times[2], aroma: this.state.times[3], }}
                            submit={(inputs) => null}
                            render={(timerProps) => beers.map(beer =>  
                                                        <BoilTimer {...timerProps} key={beer.id} {...beer} setTimes={this.setTimes}/> 
                                                        // mapping props.beers AND spreading timerProps into <BoilTimer/>
                            )}                        
                        />
                    </div>
               </div>
                
            </div>
        )
    }
}

export default withBeer(BrewDay)