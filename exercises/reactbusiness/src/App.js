import React from 'react'
import Navbar from './Navbar.js'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import './style.css'

function App(){
    return (
        <div className="app-container">
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App