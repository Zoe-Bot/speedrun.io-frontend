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
                <div className="col-12 col-lg-7">
                    <div className="col-12">
                        <h4>Highscores</h4>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item border border-primary me-3" role="presentation">
                                <button class="nav-link text-primary px-4 active" id="pills-daily-tab" data-bs-toggle="pill" data-bs-target="#pills-daily" type="button" role="tab" aria-controls="pills-daily" aria-selected="true">Daily</button>
                            </li>
                            <li class="nav-item border border-primary me-3" role="presentation">
                                <button class="nav-link text-primary px-4" id="pills-weekly-tab" data-bs-toggle="pill" data-bs-target="#pills-weekly" type="button" role="tab" aria-controls="pills-weekly" aria-selected="false">Weekly</button>
                            </li>
                            <li class="nav-item border border-primary me-3" role="presentation">
                                <button class="nav-link text-primary px-4" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="false">Monthly</button>
                            </li>
                            <li class="nav-item border border-primary me-3" role="presentation">
                                <button class="nav-link text-primary px-4" id="pills-forever-tab" data-bs-toggle="pill" data-bs-target="#pills-forever" type="button" role="tab" aria-controls="pills-forever" aria-selected="false">Forever</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-daily" role="tabpanel" aria-labelledby="pills-daily-tab">
                            </div>
                            <div class="tab-pane fade" id="pills-weekly" role="tabpanel" aria-labelledby="pills-weekly-tab">...</div>
                            <div class="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">...</div>
                            <div class="tab-pane fade" id="pills-forever" role="tabpanel" aria-labelledby="pills-forever-tab">...</div>
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