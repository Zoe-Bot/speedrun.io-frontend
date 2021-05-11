import React, { useEffect } from "react";
import useState from 'react-usestateref'
import ErrorPage from './ErrorPage'

const MapPage = ({ match }) => {
    const id = match.params.id
    //609a96cbcb6c3d6b9008a0b3

    const [map, setMap, mapRef] = useState()
    const [user, setUser, userRef] = useState()
    const [highscores, setHighscores, highscoresRef] = useState()

    useEffect(() => {
        const fetchMaps = async () => {
            const result = await fetch(`http://localhost:3000/v1/maps/${id}`)
            const body = await result.json();
            setMap(body)
            fetchUser()
        }
        fetchMaps()

        const fetchUser = async () => {
            const result = await fetch(`http://localhost:3000/v1/users/${mapRef.current.authorId}`)
            const body = await result.json();
            setUser(body)
        }

        const fetchHighscores = async () => {
            const result = await fetch(`http://localhost:3000/v1/maps/${id}/highscores`)
            const body = await result.json();
            setHighscores(body)
            console.log(highscoresRef)
        }
        fetchHighscores()
    }, [id])

    return (
        <div>
            { map && user && highscores && 
            <>
                <h1>{map.id} {map.name}</h1>
                <p>From: {user.username}</p>
                <p>difficulty: {map.difficulty}</p>
                <h2>Tags</h2>
                {map.tags.map((tag, key) => <p key={key}>{tag}</p>)}
                <h2>Highscores</h2>
                {highscores.map((highscore, key) => <p key={key}>{highscore.score}</p>)}
            </>
            }
        </div>
    );

}

export default MapPage