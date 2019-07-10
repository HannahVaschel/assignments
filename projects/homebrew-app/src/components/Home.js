import React from 'react'
import TileList from './TileList.js'
import {withBeers} from './context/BeerProvider.js'

const Home = props => {
    console.log(props)
    return(
        <div>
            <button onClick={props.getRandomBeer}>Get Random Beer</button>
            <button onClick={props.getAllBeers}>Get All the Beers</button>
           
            <TileList beers={props.beers}/>
        </div>
    )
}

export default withBeers(Home)