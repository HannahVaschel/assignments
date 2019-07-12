import React, { Component } from 'react'
import { withBeer } from './context/BeerProvider.js'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import BrewDay from './components/BrewDay.js'

class App extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render(){
    // console.log(this.props.beers)
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" 
                        render={(routerProps) => <Home 
                                                    {...routerProps} 
                                                    beers={this.props.beers}
                                                    getRandomBeer={this.props.getRandomBeer}
                                                    getAllBeers={this.props.getAllBeers}
                                                
                                                />}
                    />
                    <Route path="/brewday-tools" render={(routerProps) => <BrewDay
                                                                    {...routerProps}
                                                                    {...this.props}

                                                                    />}
                    />
                    
                </Switch>


                
                

            </div>
        )
    }
}

export default withBeer(App)