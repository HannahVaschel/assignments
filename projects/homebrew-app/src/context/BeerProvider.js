import React, { Component } from 'react'
import axios from 'axios';

const BeerContext = React.createContext()

class BeerProvider extends Component {
    constructor(){
        super()
        this.state = {
            beerArr: {beers: [{abv: "", id: "", ingredients: {hops: [] }, method: {fermentation: {temp: ""}, mash_temp: []} } ]},
            beers: {beers:{}}

        }
    }

    getRandomBeer = () => {
        
        axios.get("https://api.punkapi.com/v2/beers/random")
            .then(res => {
                this.setState({
                    beers: res.data
                }, () => console.log(this.state.beers))
            })
            .catch(err => console.log(err))
    }

    getAllBeers = () => {
        axios.get("https://api.punkapi.com/v2/beers/")
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
            .catch(err => console.log(err))
    }

    // componentDidMount(){
    //     this.getAllBeers()
    // }

    render(){
        console.log(this.state.beerArr)

        return(
            <BeerContext.Provider
                value={{
                    beers: {...this.state.beers},
                    getRandomBeer: this.getRandomBeer,
                    getAllBeers: this.getAllBeers,
                }}
            >
                {this.props.children}
            </BeerContext.Provider>
        )
    }
}

export default BeerProvider

export const withBeer = C => props => (
    <BeerContext.Consumer>
        { value => <C {...value} {...props} /> }
    </BeerContext.Consumer>
)

