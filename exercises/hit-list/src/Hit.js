import React from 'react'

function Hit(props){
    let hitPic
    props.stealthMode ? hitPic = {backgroundImage: `url(${props.message})`} : hitPic = {backgroundImage: `url(${props.image})`}
    
    return(
        <div className="hit-div" style={hitPic}>
            <span>{props.name}</span>
        </div>
    )
}

export default Hit