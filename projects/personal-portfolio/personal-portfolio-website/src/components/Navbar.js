import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar