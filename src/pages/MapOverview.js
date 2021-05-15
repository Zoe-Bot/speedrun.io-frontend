import React, { useEffect } from "react";
import useState from 'react-usestateref'

const MapOverview = ({ match }) => {
    const id = match.params.id
    const [map, setMap, mapRef] = useState()

    useEffect(() => {
        const fetchMap = async () => {
            const result = await fetch(`http://localhost:3000/v1/maps/frontend/${id}`)
            const body = await result.json()
            setMap(body[0])
            console.log("map", mapRef.current)
        }
        fetchMap()
    }, [id])

    return (
        <div className="container">
            { map &&
                <>
                    <h1>{map.id} {map.name}</h1>
                    <p>From: {map.author.username}</p>
                    <p>difficulty: {map.difficulty}</p>
                    <h2>Tags</h2>
                    <div>
                        <p>{map.tags.map((tag) => tag + " ")}</p>
                    </div>
                    <h2>Highscores</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>score</td>
                                <td>user</td>
                            </tr>
                        </thead>
                        <tbody>
                            {map.highscores.map((highscore, key) => {
                                return <tr key={key}>
                                        <td>{highscore.score}</td>
                                        <td>{highscore.user.username}</td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
                </>
            }
        </div>
    );

}

export default MapOverview