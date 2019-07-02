import React, {Component} from 'react'
import Badge from './Badge.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            phone: "",
            birthPlace: "",
            favFood: "",
            description: "",
            array: [],
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        const { fName, lName, email, phone, birthPlace, favFood, description} = this.state
        
        e.preventDefault()
        const newBadge = {
            fName: fName,
            lName: lName,
            email: email,
            phone: phone,
            birthPlace: birthPlace,
            favFood: favFood,
            description: description,
        }

        this.setState(prevState =>({
            fName: "",
            lName: "",
            email: "",
            phone: "",
            birthPlace: "",
            favFood: "",
            description: "",
            array: [...prevState.array, newBadge],
        }))
    }

    formCheck = e => {
        
        const relevantState = [this.state.fName, this.state.lName, this.state.email, this.state.phone, this.state.birthPlace, this.state.favFood, this.state.description]
            //Object.values is a method that returns just the values from an object's key-value pairs   
        const allFields = Object.values(relevantState).every(input => input.length >= 3)
        let phoneSyntax 
            //regex checks that there are no non-digit characters
        if(!/\D/.test(this.state.phone) === true && this.state.phone.length === 10){
            phoneSyntax = true
        } else { 
            phoneSyntax = false 
        }
        if (allFields && !phoneSyntax){
            alert("Please input phone number in this format: 555123456")
            this.setState({
                phone: ""
            })}  

       return (allFields && phoneSyntax)
    }

    

    render(){

        const bool = this.formCheck()
        // console.log(this.formCheck())
    

        const mappedBadges = this.state.array.map((badge, i) => <Badge
                                                                    key={badge.fName + i}
                                                                    {...badge}
                                                                    index={i}  
                                                                />)

    
        return(
            <div className="main-div">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="fName"
                        value={this.state.fName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <input 
                        type="text"
                        name="lName"
                        value={this.state.lName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} 
                        placeholder="email"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        placeholder="Phone Number"
                    />
                    <input
                        type="text"
                        name="birthPlace"
                        value={this.state.birthPlace}
                        onChange={this.handleChange}
                        placeholder="Place of Birth"
                    />
                    <input
                        type="text"
                        name="favFood"
                        value={this.state.favFood}
                        onChange={this.handleChange}
                        placeholder="Favorite Food"
                    />
                    
                    <textarea 
                        rows={10}
                        cols={75}
                        style={{resize: "none"}}
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Tell us about yourself"
                    />

                    <button disabled={!bool}>Submit</button>


                </form>
                
                {mappedBadges}
            </div>
        )
    }
}

export default App