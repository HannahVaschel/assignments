import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'

const App = () => {
    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/contact" component={Contact} /> */}

            </Switch>

        </div>
    )
}

export default App