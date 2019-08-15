import React from 'react'

const UkeForm = props => {
    const { handleChange, handleSubmit, uAString, uEString, uCString, uGString  } = props
    return(
        <form onSubmit={handleSubmit} className="tab-form">
            <div className="tab-input-div">
                <input 
                    type="number" 
                    name="uAString" 
                    value={uAString} 
                    onChange={handleChange} 
                    placeholder="A"
                />
                <input 
                    type="number" 
                    name="uEString" 
                    value={uEString} 
                    onChange={handleChange} 
                    placeholder="E"
                />
                <input 
                    type="number" 
                    name="uCString" 
                    value={uCString} 
                    onChange={handleChange} 
                    placeholder="C"
                />
                <input 
                    type="number" 
                    name="uGString" 
                    value={uGString} 
                    onChange={handleChange} 
                    placeholder="G"
                />
            </div>
            <button>Convert!</button>
        </form>
    )
}

export default UkeForm