import React from 'react'
import BeerTile from './BeerTile.js'

  {/* <BeerTile 
            name={name}
            abv={abv}
            ibu={ibu}
            tagline={tagline}
        />
        <BeerTile 
            name={name}
            abv={abv}
            ibu={ibu}
            tagline={tagline}
            description={description} 
        /> */}

const TileList = props => {
    const {name, ibu, abv, tagline, description, beers} = props.beers

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