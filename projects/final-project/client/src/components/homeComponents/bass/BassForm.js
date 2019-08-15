import React from 'react'

const BassForm = props => {
    const { handleChange, handleSubmit, bGString, bDString, bAString, bEString  } = props
    return(
        <form onSubmit={handleSubmit} className="tab-form">
            <div className="tab-input-div">
                <input 
                    type="number" 
                    name="bGString" 
                    value={bGString} 
                    onChange={handleChange} 
                    placeholder="G"
                />
                <input 
                    type="number" 
                    name="bDString" 
                    value={bDString} 
                    onChange={handleChange} 
                    placeholder="D"
                />
                <input 
                    type="number" 
                    name="bAString" 
                    value={bAString} 
                    onChange={handleChange} 
                    placeholder="A"
                />
                <input 
                    type="number" 
                    name="bEString" 
                    value={bEString} 
                    onChange={handleChange} 
                    placeholder="E"
                />
            </div>
            <button>Convert!</button>
        </form>
    )
}

export default BassForm