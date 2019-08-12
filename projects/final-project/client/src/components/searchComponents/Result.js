import React from 'react'

const Result = props => {
    const { id, title, artist, openNewTab, saveTab, exactLink, songName, artistName } = props
    console.log(exactLink)
    return(
        <div>
            { exactLink !== "" && <p onClick={() => openNewTab(exactLink)}>{songName} - {artistName}</p> }
            <p onClick={() => openNewTab(`http://www.songsterr.com/a/wa/song?id=${id}`)}>{title} - {artist.name}</p>
            <button onClick={() => saveTab([props])}>Favorite</button>
        </div>
    )
}

export default Result