import React from 'react'
import BoilTimer from './BoilTimer.js'
import Timer from '../shared/Timer.js'


// ! Display info ONLY here!

const BrewDay = props => {


    const {beers} = props.beers
    // console.log(props.beers)
            

    return(
        <div className="timer-div">
            <h1>Total Time: </h1>
            
            
            <Timer 
                inputs={{ bittering: "", flavoring: "", aroma: "", }}
                submit={(inputs) => alert(`working so far...`)}
                render={(timerProps) => beers.map(beer =>  
                                            <BoilTimer {...timerProps} key={beer.id} {...beer}/> 
                                            // mapping props.beers AND spreading timerProps into <BoilTimer/>
                        )}
                        
            
            />

            

            <button onClick={props.getRandomBeer}>Get Random Beer</button>
            
            
            

        </div>
    )
}

export default BrewDay