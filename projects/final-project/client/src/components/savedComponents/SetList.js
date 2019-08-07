import React from 'react'
import { withNotes } from '../../context/NoteProvider.js'

const SetList = props => {
    return(
        <div>Saved Tabs</div>
    )
}

export default withNotes(SetList)