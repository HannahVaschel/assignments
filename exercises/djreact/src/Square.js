import React from 'react'

function Square(props) {
    const squareStyle = ({
        backgroundColor: props.color
    })

    return(
        <div className="square" style={squareStyle}>
        </div>
    )
}

export default Square