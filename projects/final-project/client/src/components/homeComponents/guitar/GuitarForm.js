import React from 'react'

const GuitarForm = props => {
    const { handleChange, handleSubmit, eStringHi, bString, gString, dString, aString, eString  } = props
    return(
        <form onSubmit={handleSubmit} className="guitar-form">
            e
            <input 
                type="number" 
                name="gEStringHi" 
                value={eStringHi} 
                onChange={handleChange} 
                placeholder="E"
            />
            b<input 
                type="number" 
                name="gBString" 
                value={bString} 
                onChange={handleChange} 
                placeholder="B"
            />
            g<input 
                type="number" 
                name="gGString" 
                value={gString} 
                onChange={handleChange} 
                placeholder="G"
            />
            D<input 
                type="number" 
                name="gDString" 
                value={dString} 
                onChange={handleChange} 
                placeholder="D"
            />
            A<input 
                type="number" 
                name="gAString" 
                value={aString} 
                onChange={handleChange} 
                placeholder="A"
            />
            E<input 
                type="number" 
                name="gEString" 
                value={eString} 
                onChange={handleChange} 
                placeholder="E"
            />
            <button>Convert!</button>
        </form>
    )
}

export default GuitarForm