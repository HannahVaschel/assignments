import React from 'react'
import DisplayObject from './DisplayObject';

const Projects = () => {
    return(
        <div className="projects-container">
            <h1 className="projects-header">Projects</h1>
            <DisplayObject 
                name="HomeBrewDog" 
                imgUrl="https://images.unsplash.com/photo-1518542698889-ca82262f08d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                description="This was a personal project I completed using React. It pulls beer recipes published by BrewDog from PunkAPI and auto-generates timers and other tools to be used while brewing beer!"
                url="https://homebrewdog.surge.sh/"
            />
            <DisplayObject 
                name="Vices and Rewards"
                imgUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                description="This was a group project completed with two other team members while in boot camp. It is a personal savings tracker, meant to be used for planning for a specific event such as a festival or convention. It's best viewed (and used) on a mobile device. I primarily worked on the backend and set up User Authorization, but I also had a hand in quite a bit of the functionality as well, especially the graphic display on the homepage."
                url="https://vicesnrewards.herokuapp.com"
                github="https://github.com/MrCharlesVasquez/group-project"
            />
            <DisplayObject 
                name="EasyTab"
                imgUrl="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                description="This was my final project during my time in boot camp. It is a full stack app that allows the user to input guitar tablature numbers which are then converted to their musical note names and displayed on a fretboard diagram, to help beginning guitarists learn their way around the instrument. It also uses the Songsterr API so they can search for tabs to learn, and save/make notes about them in a personal setlist."
                url=""
                github=""
            />


            {/* <div className="project-info-display">Coming Soon!</div> */}

        </div>
    )
}

export default Projects