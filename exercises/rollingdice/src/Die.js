import React from 'react'

const Die = props => {
    return(
        <div className={`die-div ${props.dieClass}`} onClick={() => props.selectDie(props.dClass)} >
            <h3>{props.num}</h3>
        </div>

    )
}

export default Die