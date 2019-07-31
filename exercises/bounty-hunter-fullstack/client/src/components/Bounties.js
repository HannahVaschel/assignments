import React from 'react'

const Bounties = props => {
    const { firstName, lastName, living, bounty, alignment } = props
    console.log(props)

    return(
        <div style={{border: "1px solid black"}}>
            <h1>Name: {firstName} {lastName}</h1>
            <h3>Alive: {living}</h3>
            <h3>bounty: {bounty}</h3>
            <h3>alignment: {alignment}</h3>

        </div>
    )
}

export default Bounties