import React, { Component } from 'react'
import { withBeer } from './context/BeerProvider.js'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import BrewTimer from './components/BrewTimer.js'

class App extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        console.log(this.props)

        return(
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" 
                        render={(routerProps) => <Home 
                                                    {...routerProps} 
                                                    beers={this.props.beers} 
                                                    getRandomBeer={this.getRandomBeer} 
                                                    getAllBeers={this.getAllBeers}
                                                />}
                    />
                    <Route path="/timer" component={BrewTimer}/>
                    
                </Switch>


                
                

            </div>
        )
    }
}

export default withBeer(App)