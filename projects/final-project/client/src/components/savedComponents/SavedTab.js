import React, { useState } from 'react'

const SavedTab = props => {
    const { title, artist, openNewTab, url, _id, deleteTab, editNotes, notes,  } = props
    
    const [ newNotes, setNewNotes ] = useState("")
    const [ canEdit, setEdit ] = useState(false)
    const [ editCount, setEditCount ] = useState(0)
    
    const handleChange = e => {
        setNewNotes(e.target.value)
        setEditCount(prevCount => prevCount + 1)
            // editCount being non-zero will allow textareas to be cleared without displaying old notes
        
    }
    const handleSubmit = e => {
        if(canEdit){

            e.preventDefault()
            editNotes(_id, newNotes)
                // clicking save button sets canEdit back to false
            setEdit(prevEdit => !prevEdit)
        } else {  
            e.preventDefault()
                // clicking edit button changes canEdit to true
            setEdit(prevEdit => !prevEdit)
        }

    }
    const formClass = canEdit ? "editMode" : "displayMode"
  
    return(
        <div>
            <p onClick={() => openNewTab(url)}>{title} - {artist}</p>
            <form className={formClass} onSubmit={handleSubmit}>
                { canEdit ?
                    <>
                    <textarea name="notes" value={newNotes || editCount > 0 ? newNotes : notes} onChange={handleChange} cols="30" rows="2" placeholder="current metronome marking, practice reminders, performance notes, etc"></textarea>
                    <button /*onClick={() => editNotes(_id, newNotes)}*/>Save Notes</button>
                    </>
                  :
                    <>
                    <p>{notes ? notes : "(add notes!)"}</p>
                    <button>Edit Notes</button>
                    </>
                }
            </form>
            <button onClick={() => deleteTab(_id)}>Remove</button>
        </div>
    )
}

export default SavedTab