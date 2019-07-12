import React from 'react'
import TileList from './TileList.js'


const Home = props => {
    return(
        <div>
            <button onClick={props.getRandomBeer}>Get Random Beer</button>
            <button onClick={props.getAllBeers}>Get All the Beers</button>
           
            <TileList beers={props.beers}/>
        </div>
    )
}

export default Home