import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Navbar