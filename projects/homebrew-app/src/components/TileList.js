import React from 'react'
import BeerTile from './BeerTile.js'


const TileList = props => {

    const { beers } = props.beers

    const mappedBeers = beers.map(beer => <BeerTile 
                                                    {...beer}
                                                    key={beer.id}
                                                    />)

    return(
        <div>
            { mappedBeers }
           

        </div>
    )
}

export default TileList