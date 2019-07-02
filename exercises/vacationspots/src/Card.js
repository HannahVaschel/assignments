import React from 'react'

function Card(props) {
    let borderColor 
    if (props.timeToGo === "Spring"){
        borderColor = "green"
    } else if (props.timeToGo === "Summer"){
        borderColor = "darkorange"
    } else if (props.timeToGo === "Fall"){
        borderColor = "firebrick"
    } else if (props.timeToGo === "Winter"){
        borderColor = "deepskyblue"
    }

    let dollarSigns
    if (props.price < 500){
        dollarSigns = "$"
    } else if (props.price < 1000){
        dollarSigns = "$$"
    } else {
        dollarSigns = "$$$"
    }

    return (
        <div className="card-div" style={{border: `5px solid ${borderColor}`}}>
            <h2>{props.place}</h2>
            <p>{props.timeToGo}</p>
            <p>{props.price}</p>
            <p>{dollarSigns}</p>
        </div>
    )
}

export default Card