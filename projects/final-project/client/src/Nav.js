import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { logout, token } = props
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/tab-search">Tab Search</Link>
            <Link to="/saved-tabs">Setlist</Link>
           { token && <button onClick={logout}>Logout</button> }

        </div>
    )
}

export default Nav