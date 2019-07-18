import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/brewday-tools">BrewDay Timers</Link>
            <Link to="/recipe-view">View Recipe</Link>
        </div>
    )
}

export default Navbar 