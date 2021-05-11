import React, { useEffect } from "react";
import useState from 'react-usestateref'
import ErrorPage from './ErrorPage'

const MapPage = ({ match }) => {
    const id = match.params.id
    const [map, setMap, mapRef] = useState()

    useEffect(() => {
        const fetchMap = async () => {
            const result = await fetch(`http://localhost:3000/v1/maps/frontend/${id}`)
            const body = await result.json()
            setMap(body[0])
        }
        fetchMap()
    }, [id])

    console.log(mapRef.current)
    return (
        <div>
            { map && 
            <>
                <h1>{map.id} {map.name}</h1>
                <p>From: {map.author.username}</p>
                <p>difficulty: {map.difficulty}</p>
                <h2>Tags</h2>
                {map.tags.map((tag, key) => <p key={key}>{tag}</p>)}
                <h2>Highscores</h2>
                
            </>
            }
        </div>
    );

}

export default MapPage