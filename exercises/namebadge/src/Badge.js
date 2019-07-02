import React from 'react'

const Badge = props => {
    const headerColor = props.index % 2 === 0  ? {backgroundColor: "blue"} : {backgroundColor: "red"}

    return(
        <div className="badge-div">
            <h2 className="badge-header" style={headerColor}>Badge:</h2>
            <h3 className="badge-name">Name: {props.fName} {props.lName}</h3>
            <h3 className="badge-place">Place of Birth: {props.birthPlace}</h3>
            <h3 className="badge-email"> Email: {props.email}</h3>
            <h3 className="badge-phone">Phone: {props.phone.slice(0, 3)}-{props.phone.slice(3, 6)}-{props.phone.slice(6)}</h3>
            <h3 className="badge-food">Favorite Food: {props.favFood}</h3>
            <p className="badge-description">{props.description}</p>
            
        </div>

    )
}

export default Badge