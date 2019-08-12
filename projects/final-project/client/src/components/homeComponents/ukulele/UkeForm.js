import React from 'react'

const UkeForm = props => {
    const { handleChange, handleSubmit, eStringHi, bString, gString, dString, aString, eString  } = props
    return(
        <form onSubmit={handleSubmit} className="uke-form">
            A
            <input 
                type="number" 
                name="uAString" 
                value={eStringHi} 
                onChange={handleChange} 
                placeholder="A"
            />
            E<input 
                type="number" 
                name="uEString" 
                value={bString} 
                onChange={handleChange} 
                placeholder="E"
            />
            C<input 
                type="number" 
                name="uCString" 
                value={gString} 
                onChange={handleChange} 
                placeholder="C"
            />
            G<input 
                type="number" 
                name="uGString" 
                value={dString} 
                onChange={handleChange} 
                placeholder="G"
            />
            <button>Convert!</button>
        </form>
    )
}

export default UkeForm