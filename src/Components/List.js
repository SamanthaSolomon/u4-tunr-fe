import React, { useEffect } from "react"
import Song from "./Song"


const List = (props) => {
    
    const [songs, setSongs] = React.useState([])

    useEffect(() => {
        const getAllSongs = async () => {
            const response = await fetch('https://vast-lowlands-87203.herokuapp.com/songs')
            const data = await response.json()
            setSongs(data)
        }
        getAllSongs()
    }, [])

    
    return (
        <div>
            <h2>Song List</h2>
            <Song songs={songs}/>
        </div>
    )
}

export default List