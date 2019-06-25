import React from 'react'
import Menu from './Menu.js'
import About from './About.js'


function Main(){
    return (
        <div className="main-div">
            <Menu />
            <div className="scroll-img1"></div>
            <About />
            <div className="scroll-img2"></div>

        </div>
    )
}

export default Main