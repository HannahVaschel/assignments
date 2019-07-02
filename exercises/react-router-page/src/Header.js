import React from 'react'
import Navbar from './Navbar.js'

const Header = () => {
    return(
        <div className="header">
            <Navbar />
            <h1>The Hammer Store</h1>
            <h3>"Where every problem looks like a nail!"</h3>

        </div>
    )
}

export default Header