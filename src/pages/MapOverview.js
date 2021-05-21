import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import useState from 'react-usestateref'
import background from '../assets/img/example.jpg'

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
        <div className="container mb-5">
            <div className="row">
                <div className="col-12">
                    <p className="text-primary mb-1">Map</p>
                    <h1>Super Mario</h1>
                    <p className="text-muted">by <Link className="text-primary" to="/profile">Zoe</Link></p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-5">
                    <div className="row">
                        <div className="col-12 d-flex">
                            <div className="d-flex pe-3">
                                <i className="fas fa-medal text-primary fs-5 pe-2"></i><p>01:32:00</p>
                            </div>
                            <div className="d-flex pe-3">
                                <i className="fas fa-medal fs-5 pe-2"></i><p>01:32:00</p>
                            </div>
                            <div className="d-flex pe-3">
                                <i className="fas fa-medal text-muted fs-5 pe-2"></i><p>01:32:00</p>
                            </div>
                            <div className="d-flex pe-3">
                                <i className="fas fa-medal text-muted fs-5 pe-2"></i><p>01:32:00</p>
                            </div>
                        </div>
                        <div className="col-12 mb-2">
                            {/* TODO: image tauschen zu background image */}
                            <img src={background} className="img-fluid mb-3"></img>
                            <Link className="btn btn-primary w-100 text-decoration-none" to="/game">Play map<i className="fas fa-play ps-2"></i></Link>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                                <h6>Difficulty</h6>
                                <p className="mb-0">Easy</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                                <h6>Rating</h6>
                                <p className="mb-0">2000 upvotes</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                                <h6>Tags</h6>
                                <div className="d-flex text-primary">
                                    {/* TODO: Link to mapsoverview with filter selected */}
                                    <p className="mb-0 pe-2">Jump</p>
                                    <p className="mb-0">Run</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                                <h6>Time uploaded</h6>
                                <p className="mb-0">5 months ago</p>
                            </div>
                            <div className="d-flex justify-content-between mt-3 pb-2">
                                <h6>Last time updated</h6>
                                <p className="mb-0">2 weeks ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MapOverview


/*{ map &&
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
            } */