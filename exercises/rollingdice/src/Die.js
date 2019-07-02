import React from 'react'

const Die = props => {
    // console.log(props)
    return(
        <div className={`die-div ${props.dieClass}`} onClick={() => props.selectDie(props.dieNum)} >
            <h3>{props.num}</h3>
        </div>

    )
}

export default Die