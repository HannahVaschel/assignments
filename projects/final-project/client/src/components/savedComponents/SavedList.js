import React from 'react'
import SavedTab from './SavedTab.js'

const SavedList = props => {
    const { savedTabs } = props
    const mappedSaves = savedTabs.map(tab => <SavedTab
                                                    key={tab._id} 
                                                    {...tab}
                                                    {...props} />)
    return(
        <div>
            {mappedSaves}
        </div>
    )
}

export default SavedList