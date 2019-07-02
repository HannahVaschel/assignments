import React from 'react'


function Controls(props){
    
    return(
        <div className="btn-div">
            <button onClick={props.blackAndWhite}>Black and White</button>
            <button onClick={props.topHalfPurple}>Top Half Purple</button>
            <button onClick={props.lowerLeftBlue}>Lower Left Blue</button>
            <button onClick={props.lowerRightBlue}>Lower Right Blue</button>
            <button onClick={props.topLeft}>Top Left Random</button>
            <button onClick={props.topRight}>Top Right Random</button>
            <button onClick={props.bottomLeft}>Bottom Left Random</button>
            <button onClick={props.bottomRight}>Bottom Right Random</button>
        </div>
    )
}

export default Controls