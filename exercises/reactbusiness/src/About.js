import React from 'react'

function About(){
    return (
        <div className="about-div">
            <h3 className="about-header">Our Story</h3>
            <hr className="subheader-line"></hr>
            <div className="about-content-container">
                <p className="about-content">
                    Lorem ipsum dolor amet tofu ramps helvetica banjo. Church-key sustainable offal, taiyaki umami hammock hexagon distillery. Fixie enamel pin blue bottle, adaptogen offal pabst keytar woke pok pok microdosing jean shorts locavore dreamcatcher. Lo-fi fanny pack yuccie bespoke retro pickled green juice 90's godard health goth live-edge pug. Seitan chicharrones readymade, pop-up truffaut vexillologist butcher yr mixtape snackwave sriracha waistcoat gochujang next level.
                </p>
                <img className="founder-img" src="https://images.unsplash.com/photo-1536935663840-b318537c89bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div>
    )
}

export default About