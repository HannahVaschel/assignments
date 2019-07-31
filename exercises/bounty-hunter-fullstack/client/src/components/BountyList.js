import React from 'react'
import Bounties from './Bounties.js'

const BountyList = props => {
    const { bounties } = props
    console.log(bounties)
    const mappedBounties = bounties.map(bounty => <Bounties key={bounty._id} {...bounty}/>)

    return(
        <div>
            { mappedBounties }
        </div>
    )
}

export default BountyList