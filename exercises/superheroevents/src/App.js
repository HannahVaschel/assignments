import React, {Component} from 'react'
import data from './data.json'
import Superhero from './Superhero.js'

class App extends Component {

    sayCatchPhrase = phrase =>{
        alert(phrase)
    }

    
    render(){
     
        const mappedHeros = data.map((hero, i) => <Superhero
                                                    key={hero.name + i}
                                                    sayCatchPhrase={this.sayCatchPhrase}
                                                    {...hero}
                                                    />) 
     
        return(
            <div>
                {mappedHeros}
            </div>
        )
    }
}




export default App