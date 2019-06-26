import React from 'react'
import Navbar from './Navbar.js'

function Header(){
    return (
        <div className="header-div">
            <Navbar />
            <h1>Clean Blog</h1>
            <h4>A Blog Theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header