import React from 'react'
import { withNotes } from '../../context/NoteProvider.js'
import Form from '../../shared/Form.js'
import GuitarForm from './GuitarForm.js'

const Home = props => {
    const { tabToNote, convertedNotes } = props
    return(
        <div>
            <Form 
                inputs={{ eStringHi: "", bString: "", gString: "", dString: "", aString: "", eString: "" }}
                submit={ inputs => tabToNote(inputs) }
                render={ formProps => <GuitarForm {...formProps} />}
            />
            <p>{convertedNotes[0]}</p>
            <p>{convertedNotes[1]}</p>
            <p>{convertedNotes[2]}</p>
            <p>{convertedNotes[3]}</p>
            <p>{convertedNotes[4]}</p>
            <p>{convertedNotes[5]}</p>

        </div>
    )
}

export default withNotes(Home)