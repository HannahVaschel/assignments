import React from 'react'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Navbar from './Navbar.js'
import {Switch, Route} from 'react-router-dom'
import Header from './Header.js'
import Footer from './Footer.js'

const App = () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App