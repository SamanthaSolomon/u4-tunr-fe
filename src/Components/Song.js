import React from "react"
import { Route } from "react-router-dom"

const Song = (props) => {
    
    console.log('song props-', props)

    const loaded = () => {
        return(
            <div> 
                {props.songs.map((song) => {
                    return(
                    <div>    
                    <p key={song.id}>{song.artist}</p>
                    <p key={song.id}>{song.title}</p>
                    <p key={song.id}>{song.time}</p>
                    <p key={song.id}>{song.favorite}</p>
                    </div>)
                }
                )}
            </div>
        )
    }
    const loading = () => {
        return(
            <div>Loading songs...</div>
        )
    }

    return props.songs.length > 0 ? loaded() : loading()

}

export default Song