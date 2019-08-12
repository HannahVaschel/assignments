import React, { useEffect } from 'react'
import { withNotes } from '../../context/NoteProvider.js'
import SavedList from './SavedList.js'

const SetList = props => {
    const { getSetList } = props

    useEffect(() => {
        getSetList()

    }, [getSetList])



    return(
        <div>
            <h1>Setlist</h1>
            <SavedList {...props}/>
        </div>
    )
}

export default withNotes(SetList)