import React from 'react'
import { whileStatement } from '@babel/types';

const Superhero = props => {
    const divStyle = {
        backgroundImage: `url(${props.imageName})`,
        backgroundSize: "cover",
        border: "1px solid black",
        margin: "5px",
        height: "500px",
        textShadow: "2px 2px 5px white"
    }

    return(
        <div style={ divStyle } className="hero-div" onClick={() => props.sayCatchPhrase(props.catchPhrase)}>
            <h1>Name: {props.name}</h1>
            <h2>Show: {props.show}</h2>
        </div>
    )
}

export default Superhero