import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import useState from 'react-usestateref'
import HighscoreElement from "../components/HighscoreElement"
import { useTitle } from "../customHooks/useTitle"

const MapOverview = ({ match }) => {
    const slug = match.params.slug
    const [map, setMap, mapRef] = useState()
    const [highscores, setHighscores, highscoresRef] = useState()
    const [loaded, setLoaded, loadedRef] = useState({
        loaded: false
    })

    const msToTime = (s) => {
        const ms = s % 1000;
        s = (s - ms) / 1000;
        const secs = s % 60;
        s = (s - secs) / 60;
        const mins = s % 60;
      
        return (mins < 10 ? "0"+ mins : mins) + ':' + (secs < 10 ? "0"+ secs : secs) + ':' + (ms < 100 ? (ms < 10 ? "00" + ms : "0" + ms): ms);
    }

    const beautifyStringtoDate = (str) => {
        let date = new Date(str)
        return date.toLocaleDateString("en-GB")
    }

    useEffect(() => {
        const fetchMap = async () => {
            const result = await fetch(`${process.env.REACT_APP_BASE_URL}/maps/${slug}?projection=author`)
            const body = await result.json()
            setMap(body)

            fetchHighscores(body.id)
        }
        fetchMap()
        const fetchHighscores = async (id) => {
            const result = await fetch(`${process.env.REACT_APP_BASE_URL}/highscores/maps/${id}`)
            const highscores = await result.json()
            setHighscores(highscores)

            setLoaded({ loaded: true })
        }
    }, [slug])

    useTitle(mapRef.current?.name ?? 'Loading...')
    return (
        <div id="single-map" className="container fst-italic mb-5">
            {!loaded.loaded && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }
            {loaded.loaded && <>
                <div className="row">
                    <div className="col-12">
                        <p className="text-primary mb-1">Map</p>
                        <h1>{map.name}</h1>
                        <p className="text-light">by <span className="text-primary">{map.author.username}</span></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="d-flex pe-3">
                                    <i className="fas fa-medal text-primary fs-5 pe-2"></i><p>{msToTime(map.medals.author)}</p>
                                </div>
                                <div className="d-flex pe-3">
                                    <i className="fas fa-medal text-gold fs-5 pe-2"></i><p>{msToTime(map.medals.gold)}</p>
                                </div>
                                <div className="d-flex pe-3">
                                    <i className="fas fa-medal text-silver fs-5 pe-2"></i><p>{msToTime(map.medals.silver)}</p>
                                </div>
                                <div className="d-flex pe-3">
                                    <i className="fas fa-medal text-bronze fs-5 pe-2"></i><p>{msToTime(map.medals.bronze)}</p>
                                </div>
                            </div>
                            <div className="col-12 mb-2">
                                <div id="thumbnail-img" style={{ backgroundImage: `url(${map.thumbnail})` }} className="mb-3"></div>
                                <Link className="btn btn-primary w-100 text-decoration-none" to="/game">Play map<i className="fas fa-play ps-2"></i></Link>
                            </div>
                            <div className="col-12">
                                <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                                    <h6>Difficulty</h6>
                                    <p className="mb-0">{map.difficulty}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-baseline border-bottom mt-3 pb-2">
                                    <h6>Rating</h6>
                                    <p className="mb-0">{13}<i className="fas fa-caret-up text-primary fs-4 ps-1"></i></p>
                                </div>
                                <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                                    <h6>Tags</h6>
                                    <div className="d-flex text-primary">
                                        {map.tags.map((tag, key) => {
                                            return <p key={key} className="mb-0 ps-2">{tag}</p>
                                        })}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom mt-3 pb-2">
                                    <h6>Time uploaded</h6>
                                    <p className="mb-0">{beautifyStringtoDate(map.createdAt)}</p>
                                </div>
                                <div className="d-flex justify-content-between mt-3 pb-2">
                                    <h6>Last time updated</h6>
                                    <p className="mb-0">{beautifyStringtoDate(map.updatedAt)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className="col-12">
                            <h4>Highscores</h4>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item border border-primary mb-3 mb-sm-0 me-3" role="presentation">
                                    <button className="nav-link text-primary px-4 active" id="pills-daily-tab" data-bs-toggle="pill" data-bs-target="#pills-daily" type="button" role="tab" aria-controls="pills-daily" aria-selected="true">Daily</button>
                                </li>
                                <li className="nav-item border border-primary mb-3 mb-sm-0 me-3" role="presentation">
                                    <button className="nav-link text-primary px-4" id="pills-weekly-tab" data-bs-toggle="pill" data-bs-target="#pills-weekly" type="button" role="tab" aria-controls="pills-weekly" aria-selected="false">Weekly</button>
                                </li>
                                <li className="nav-item border border-primary mb-3 mb-sm-0 me-3" role="presentation">
                                    <button className="nav-link text-primary px-4" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="false">Monthly</button>
                                </li>
                                <li className="nav-item border border-primary mb-3 mb-sm-0 me-3" role="presentation">
                                    <button className="nav-link text-primary px-4" id="pills-forever-tab" data-bs-toggle="pill" data-bs-target="#pills-forever" type="button" role="tab" aria-controls="pills-forever" aria-selected="false">Forever</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-daily" role="tabpanel" aria-labelledby="pills-daily-tab">
                                    {highscores.map((highscore, key) => {
                                        return <HighscoreElement key={key} position={key + 1} username={highscore.user.username} score={msToTime(highscore.score)} bgtransparent={key % 2 != 0 ? true : false} />
                                    })}
                                </div>
                                <div className="tab-pane fade" id="pills-weekly" role="tabpanel" aria-labelledby="pills-weekly-tab">...</div>
                                <div className="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">...</div>
                                <div className="tab-pane fade" id="pills-forever" role="tabpanel" aria-labelledby="pills-forever-tab">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    );

}

export default MapOverview