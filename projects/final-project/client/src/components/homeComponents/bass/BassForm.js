import React from 'react'

const BassForm = props => {
    const { handleChange, handleSubmit, gString, dString, aString, eString  } = props
    return(
        <form onSubmit={handleSubmit} className="bass-form">
            g<input 
                type="number" 
                name="bGString" 
                value={gString} 
                onChange={handleChange} 
                placeholder="G"
            />
            D<input 
                type="number" 
                name="bDString" 
                value={dString} 
                onChange={handleChange} 
                placeholder="D"
            />
            A<input 
                type="number" 
                name="bAString" 
                value={aString} 
                onChange={handleChange} 
                placeholder="A"
            />
            E<input 
                type="number" 
                name="bEString" 
                value={eString} 
                onChange={handleChange} 
                placeholder="E"
            />
            <button>Convert!</button>
        </form>
    )
}

export default BassForm