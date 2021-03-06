import React from 'react'

const BeerTile = props => {

    const { name, abv, ibu, tagline, description, id } = props

    return(
        <div className="tile-div" >
            <h1>{name} </h1>
            <p>{abv} ABV </p>
            <p>{ibu} IBU</p>
            <h3>{tagline}</h3>
            <p>{description}</p> 
        </div>
    )
}


export default BeerTile

