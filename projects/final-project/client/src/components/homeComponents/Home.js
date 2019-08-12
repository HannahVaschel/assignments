import React, { useState, useEffect } from 'react'
import { withNotes } from '../../context/NoteProvider.js'
import Form from '../../shared/Form.js'
import GuitarForm from './guitar/GuitarForm.js'
import Guitar from './guitar/Guitar.js'
import BassForm from './bass/BassForm.js'
import Bass from './bass/Bass.js'
import Ukulele from './ukulele/Ukulele.js'
import UkeForm from './ukulele/UkeForm.js'
import InstSelect from './InstSelect.js'

const Home = props => {
    const { tabToNote, convertedNotes, clearNotes } = props

    const [ instSelect, setInstSelect ] = useState("guitarFrets")

    const handleSelect = e => {
        const { name, value } = e.target
        setInstSelect(value)
        clearNotes()
        components.instForm = ""
        components.fretDiagram = ""
        formInputs = ""
    }
    // useEffect(() => {
    //     setForms()
    //     console.log("render")
    // }, [instSelect])


    const components = {}
    let formInputs
    let instrument

    
    if(instSelect === "guitarFrets"){
        formInputs = { gEStringHi: "", gBString: "", gGString: "", gDString: "", gAString: "", gEString: "" }
        instrument = "guitar"
        components.instForm = GuitarForm
        components.fretDiagram = Guitar
    } else if(instSelect === "bassFrets"){
        formInputs = { bGString: "", bDString: "", bAString: "", bEString: ""  }
        components.instForm = BassForm
        components.fretDiagram = Bass
        instrument = "bass"
    } else if(instSelect === "ukeFrets"){
        formInputs = { uAString: "", uEString: "", uCString: "", uGString: "" }
        components.instForm = UkeForm
        components.fretDiagram = Ukulele
        instrument = "uke"
    }
        
    console.log(instSelect)
console.log(formInputs)
console.log(convertedNotes)



    return(
        <div>
            {/* <iframe src="https://guitarsix.com/metronome/" height="475" width="350" frameborder="0"></iframe> */}

            <InstSelect value={instSelect} handleChange={handleSelect}/>
            {components.instForm &&
                <Form 
                    inputs={formInputs}
                    submit={ inputs => tabToNote(inputs, instrument) }
                    render={ formProps => <components.instForm {...formProps} />}
                /> }
            {/* <Form 
                inputs={formInputs}
                submit={ inputs => tabToNote(inputs, "bass") }
                render={ formProps => <BassForm {...formProps} />}
            />
            <Form 
                inputs={{ aString: "", eString: "", cString: "", gString: "" }}
                submit={ inputs => tabToNote(inputs, "uke") }
                render={ formProps => <UkeForm {...formProps} />}
            /> */}

            <p>{convertedNotes[0]}</p>
            <p>{convertedNotes[1]}</p>
            <p>{convertedNotes[2]}</p>
            <p>{convertedNotes[3]}</p>
            <p>{convertedNotes[4]}</p>
            <p>{convertedNotes[5]}</p>

            <components.fretDiagram {...props}/>
        </div>
    )
}

export default withNotes(Home)