import React from 'react'
// import MaltList from './MaltList.js'
import RecipeMapped from './RecipeMapped.js'


const RecipeViewer = props => {
    // const { beers } = props.beers
    console.log(props)
    
    
    const mappedBeers = props.beers.map(beer => <RecipeMapped key={beer.id} {...beer}/>)

   return(
       <div>
           <button className="random-beer" onClick={props.getRandomBeer}>Get Random Beer</button>
           { mappedBeers }
       </div>
   )
}

export default RecipeViewer

