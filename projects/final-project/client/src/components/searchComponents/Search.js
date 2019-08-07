import React from 'react'
import { withNotes } from '../../context/NoteProvider.js'
import SearchForm from './SearchForm.js'
import Form from '../../shared/Form.js'
import ResultList from './ResultList.js'
import SearchSelect from './SearchSelect.js'

const Search = props => {
    const { openNewTab, exactLink, resultArr, searchTabs, setSearchType, searchType } = props
    console.log(props)
    return(
        <div>
            <Form 
                inputs={{ searchSelect: "" }}
                submit={ inputs => setSearchType(inputs)}
                render={ formProps => <SearchSelect {...formProps} />}
            />
            <Form 
                inputs={{ songName: "", artistName: "", general: "" }}
                submit={ inputs => searchTabs(inputs) }
                render={ formProps => <SearchForm {...formProps} searchType={searchType} />}
            />
           { exactLink!== "" && <p onClick={() => openNewTab(exactLink)}>Link to Song!</p> }
          {resultArr.length > 0 && <ResultList {...props}/> }
        </div>
    )
}

export default withNotes(Search)