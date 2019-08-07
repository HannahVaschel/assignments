import React from 'react'

const SearchSelect = props => {
    const { handleSubmit, handleChange } = props
    return(
        <form>
            <select name="searchSelect" onChange={handleChange}>
                <option value="byGeneral">General Search</option>
                <option value="byArtist">Search by Artist</option>
                <option value="byExact">Exact Title/Artist</option>
            </select>
        </form>
    )
}

export default SearchSelect