import React from 'react'

const Header = props => {
    let headerText
        props.stealthMode ? headerText = "Don Corleone's Pet List" : headerText = "Don Corleone's Hit List"
    return(
        <div className="header-div">
            <img src="https://pbs.twimg.com/profile_images/880392455182577664/-7jt5WLB_400x400.jpg" />
            <h1>{headerText}</h1>
        </div>
    )
}

export default Header