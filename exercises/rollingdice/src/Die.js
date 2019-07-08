import React from 'react'

const Die = props => {
    let isSelected
    props.selected ? isSelected = "selected" : isSelected = ""

    return(
        <div className={`die-div ${isSelected}`} onClick={(e) => props.selectDie(e, props.dieNum)} >
            <h3>{props.num}</h3>
        </div>

    )
}

export default Die