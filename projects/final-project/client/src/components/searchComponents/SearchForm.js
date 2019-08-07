import React from 'react'

// ! currently perma-displaying "byGeneral" search guidelines (hardcoded in state)
// todo: figure out how to make search select work in general
// todo: probably disconnect SearchSelect from Form.js? 


const SearchForm = props => {
    const { handleChange, handleSubmit, inputs: { songName, artistName, general }, searchType } = props


    if(searchType === "byArtist"){
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="artistName" 
                    value={artistName} 
                    onChange={handleChange}
                />
                <button>Search</button>
                </form>
        )
    } else if (searchType === "byGeneral"){
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="general" 
                    value={general} 
                    onChange={handleChange}
            />
                <button>Search</button>
            </form>
        )
    } else if (searchType === "byExact"){
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="general" 
                    value={general} 
                    onChange={handleChange}
            />
                <button>Search</button>
            </form>
        )
    }


    return(
        
        null
        
    )
}

export default SearchForm


{/* <form onSubmit={handleSubmit}>
           
           "Song Title: " 
           <input 
               type="text" 
               name="songName" 
               value={songName} 
               onChange={handleChange}
           />
           "Artist: "
           <input 
               type="text" 
               name="artistName" 
               value={artistName} 
               onChange={handleChange}
           />
           "General: "
           <input 
               type="text" 
               name="general" 
               value={general} 
               onChange={handleChange}
           />
       

           <button>Search</button>
       </form> */}