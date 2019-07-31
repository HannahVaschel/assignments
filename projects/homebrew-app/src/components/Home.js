import React, { Component } from 'react'
import TileList from './TileList.js'
import { withBeer } from '../context/BeerProvider.js'


class Home extends Component {
    componentDidMount(){
        this.props.getAllBeers()
    }

    render(){
        console.log(this.props)
        const actualBeerArray = Object.values(this.props.beers)
        return(
            <div>
                <button className="random-beer" onClick={this.props.getRandomBeer}>Get Random Beer</button>
                <button onClick={this.props.getAllBeers}>Get All the Beers</button>
        
                <TileList beers={actualBeerArray}/>
            </div>
        )
    }
}

export default withBeer(Home)