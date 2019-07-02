import React, { Component } from 'react'
import axios from 'axios'
import Hit from './Hit.js'
import Header from './Header'

class App extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            stealth: false,
        }
    }

    componentDidMount(){
        this.getChumps()
    }

    getChumps(){
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => console.log(err))
    }

    getGoodBoys(){
        axios.get("https://dog.ceo/api/breeds/image/random/7")
            .then(res => {
                this.setState({
                    data: res.data.message
                })
            })
            .catch(err => console.log(err))
    }

        //trigger stealth mode, in case someone walks in who shouldn't be seeing Don's hit list
    toggleStealth = () => {
        this.setState({
            stealth: !this.state.stealth
        }, () =>{
            this.state.stealth ? this.getGoodBoys() : this.getChumps()
        } )    
    }


    render(){
        const mappedHits = this.state.data.map((hit, i) => <Hit
                                                            key={i} 
                                                            {...hit}
                                                            message={hit}
                                                            stealthMode={this.state.stealth}
                                                            />)

        return(
            <div>
                <Header stealthMode={this.state.stealth}/>
                <button onClick={this.toggleStealth}>Toggle</button>
                <div className="hit-container">
                    {mappedHits}
                </div>
            </div>
        )
    }
}

export default App