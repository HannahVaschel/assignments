import React from 'react'

function Box(props){
    const boxstyle = {
        backgroundColor: props.backgroundColor,
        padding: "10px",
        margin: "5px"
        
    }

    return(
        <div className="box" style={boxstyle}>
            <h2>Skater: {props.name}</h2>
            <h4>Hometeam: {props.team}</h4>
            <p>Number: {props.number}</p>
            <p>Position: {props.position}</p>
        </div>
    )
}

export default Box