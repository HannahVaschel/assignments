import React from 'react'
import BeerTile from './BeerTile.js'


const TileList = props => {

    // const { beers } = props.beers
    console.log(props.beers)

    const mappedBeers = props.beers.map(beer => <BeerTile 
                                                    key={beer.id}
                                                    {...beer}
                                                    />)

    return(
        <div>
            { mappedBeers }
        </div>
    )
}

export default TileList