import React from 'react'

const Result = props => {
    const { id, title, artist, openNewTab } = props
    return(
        <div>
            <p onClick={() => openNewTab(`http://www.songsterr.com/a/wa/song?id=${id}`)}>{title} - {artist.name}</p>
        </div>
    )
}

export default Result