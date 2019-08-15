import React from 'react'

const DisplayObject = props => {
    const { name, imgUrl, description, url, github } = props

    return(
        <div className="display-div">
            <div className="img-div" style={{ backgroundImage: `url("${imgUrl}")` }}></div>
            <h2 className="project-name" onClick={() => window.open(`${url}`)}>{name}</h2>
            <p>{description}</p>
            { github && <a className="link" href={github}>Here is a link to the repository on Github!</a> }
        </div>
    )
}

export default DisplayObject