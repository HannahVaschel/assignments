import React from 'react'
import { Link } from 'react-router-dom'


const Home = props => {
    return(
        <div className="home-tint">

            <div className="home-container">
                
                <div className="intro-div">
                        <div className="hannah-pic" ></div>
                        <h1>Hannah Vaschel</h1>
                        <hr/>
                        <h3>Full Stack Web Developer</h3>
                </div>
            

                <div className="skills-div">
                    <h3>Skills</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>AJAX/HTTP</li>
                        <li>Mongoose</li>
                        <li>MongoDB</li>
                        <li>JSON</li>
                        <li>Git</li>
                    </ul>
                </div>

                <div className="about-div">
                    <h3>About</h3>
                    <p>I am a full stack web developer based in Salt Lake City. I am most driven and excited about coding at the intersection of creativity and problem-solving– that is, I like to build and make things WORK. I graudated from the V School's Full Stack JS Web Development Bootcamp on August 16, 2019 and couldn't be more excited about diving into the tech field and learning even more about coding and making cool things! </p>
                    <Link className="link" to="/projects">Check out some of my projects!</Link>
                    <Link className="link" to="/about">Let's get personal.</Link>
                </div>

                <div className="contact-div">
                    <h3>Get Ahold of Me</h3>
                    <p>Email: hvaschel@gmail.com</p>
                    <a className="link" href="https://github.com/HannahVaschel">Github</a>
                    <a className="link" href="">LinkedIn</a>
                    <span>
                        <a className="link" href={require('../files/hannah_vaschel_resume2019.pdf')} download>
                        <button className="btn">Download My Resume</button>
                        </a>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Home