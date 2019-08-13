import React from 'react'

const GuitarForm = props => {
    const { handleChange, handleSubmit, gEStringHi, gBString, gGString, gDString, gAString, gEString  } = props
    return(
        <form onSubmit={handleSubmit} className="tab-form">
            e
            <input 
                type="number" 
                name="gEStringHi" 
                value={gEStringHi} 
                onChange={handleChange} 
                placeholder="E"
            />
            b<input 
                type="number" 
                name="gBString" 
                value={gBString} 
                onChange={handleChange} 
                placeholder="B"
            />
            g<input 
                type="number" 
                name="gGString" 
                value={gGString} 
                onChange={handleChange} 
                placeholder="G"
            />
            D<input 
                type="number" 
                name="gDString" 
                value={gDString} 
                onChange={handleChange} 
                placeholder="D"
            />
            A<input 
                type="number" 
                name="gAString" 
                value={gAString} 
                onChange={handleChange} 
                placeholder="A"
            />
            E<input 
                type="number" 
                name="gEString" 
                value={gEString} 
                onChange={handleChange} 
                placeholder="E"
            />
            <button>Convert!</button>
        </form>
    )
}

export default GuitarForm