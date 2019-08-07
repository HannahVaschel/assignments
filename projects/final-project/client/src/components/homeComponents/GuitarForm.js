import React from 'react'

const GuitarForm = props => {
    const { handleChange, handleSubmit, eStringHi, bString, gString, dString, aString, eString  } = props
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                name="eStringHi" 
                value={eStringHi} 
                onChange={handleChange} 
                placeholder=""
            />
            <input 
                type="number" 
                name="bString" 
                value={bString} 
                onChange={handleChange} 
                placeholder=""
            />
            <input 
                type="number" 
                name="gString" 
                value={gString} 
                onChange={handleChange} 
                placeholder=""
            />
            <input 
                type="number" 
                name="dString" 
                value={dString} 
                onChange={handleChange} 
                placeholder=""
            />
            <input 
                type="number" 
                name="aString" 
                value={aString} 
                onChange={handleChange} 
                placeholder=""
            />
            <input 
                type="number" 
                name="eString" 
                value={eString} 
                onChange={handleChange} 
                placeholder=""
            />
            <button>Convert!</button>
        </form>
    )
}

export default GuitarForm