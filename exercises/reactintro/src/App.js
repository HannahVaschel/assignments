import React from 'react'
import Navbar from './Navbar.js'
import Header from './Header'
import "./styles.css"

function App(){
    return(
        <div className="app-container">
            <Navbar />
            <Header />
        </div>
    )
}

// App.js should be your top-level component
// So you can stack all your file components into here


export default App