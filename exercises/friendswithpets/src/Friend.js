import React from 'react'
import Pet from './Pet.js'

function Friend(props){
    const mappedPets = props.pets.map((pet, i) => 
                                        <Pet 
                                           key={"pet" + i}
                                           name={pet.name}
                                           breed={pet.breed} />)


    return(
        <div className="friend-container">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
        
            {mappedPets}
        </div>
    )

}

export default Friend