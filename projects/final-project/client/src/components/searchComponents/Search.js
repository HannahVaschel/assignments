import React, { useState } from 'react'
import { withNotes } from '../../context/NoteProvider.js'
import SearchForm from './SearchForm.js'
import Form from '../../shared/Form.js'
import ResultList from './ResultList.js'
import SearchSelect from './SearchSelect.js'

const Search = props => {
    const { openNewTab, exactLink, resultArr, searchTabs, resultNum, songName, artistName, authErrMsg, clearResultCount } = props

    const [ searchSelect, setSearchSelect ] = useState({ searchSelect: "byGeneral" })

    const handleSelect = e => {
        const { name, value } = e.target
        setSearchSelect({ [name]: value })
        clearResultCount()
    }
    
    return(
        <div>
            <SearchSelect value={searchSelect} handleChange={handleSelect}/>
            <Form 
                inputs={{ songName: "", artistName: "", general: "" }}
                submit={ inputs => searchTabs(inputs) }
                render={ formProps => <SearchForm {...formProps} searchType={searchSelect} {...props}/>}
            />
            { resultNum !== "" && <p>{resultNum} results found</p> }
            { authErrMsg && <p>{authErrMsg}</p> }
           {/* { exactLink !== "" && <p onClick={() => openNewTab(exactLink)}>{songName} - {artistName}</p> } */}
          {resultArr.length > 0 && <ResultList {...props}/> }
        </div>
    )
}

export default withNotes(Search)