import React, { Component } from 'react'

class MashTimer extends Component {
    constructor(){
        super()
        this.state = {
        
        }
    }

    celsiusToFarenheit = (value) => {
        return (value * 9 / 5) + 32
    } 

    render(){
        const { handleChange, handleSubmit } = this.props
        const {duration} = this.props.method.mash_temp[0]
        // console.log(this.props.timeDisplay())

        return(
            <div>
                <form className="mash-timer" onSubmit={handleSubmit}>
                    <input className="mash-input" type="text" name="mashTime" value={ duration ? duration : 60 } onChange={handleChange}></input>
                    <span>Mash Time</span>
                    <p>Mash Temperature: {this.celsiusToFarenheit(this.props.method.mash_temp[0].temp.value)}°F</p>

                    <button onClick={() => this.props.startMash(duration)}>Start Timer</button>
                    <button onClick={this.props.endMash}>Clear Timer</button>
                    <p>{this.props.mashTimeDisplay()}</p>

                </form>
            </div>
        )
    }
}

export default MashTimer