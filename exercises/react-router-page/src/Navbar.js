import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">

            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Contact</Link>

        </div>
    )
}

export default withRouter(Navbar)