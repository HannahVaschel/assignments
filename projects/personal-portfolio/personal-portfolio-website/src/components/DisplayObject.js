import React from 'react'

const DisplayObject = props => {
    const { name, img_url, description } = props
    return(
        <div>
            <div style={{backgroundImage: `url("${img_url}")`}} className="img-div"/>
            <h2>{name}</h2>
            <p>{description}</p>

        </div>
    )
}

export default DisplayObject