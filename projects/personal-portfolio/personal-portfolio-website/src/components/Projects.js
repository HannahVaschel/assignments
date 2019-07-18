import React from 'react'
import DisplayObject from './DisplayObject.js'

const Projects = () => {
    return(
        <div className="projects-div">
            <h1>Projects</h1>
            <DisplayObject 
                    name="homebrewdog.com" 
                    img_url="https://images.unsplash.com/photo-1519731506190-f37737f13a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    description="This was a personal project I completed using React. It pulls beer recipes published by BrewDog from PunkAPI and auto-generates timers and other tools to be used while brewing beer!"/>
            <DisplayObject />
            <DisplayObject />

            <div className="project-info-display">
                <h4>Coming Soon!</h4>
            </div>
        </div>
    )
}

export default Projects