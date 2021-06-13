import React from 'react'

const HighscoreElement = ({ position, username, score }) => (
    <div id="highscores-overview" className="col-12 bg-primary-transparent py-3 px-4 px-md-5">
        <h2 className="display-5 fw-bolder mb-0">{position}.</h2>
        <div id="highscores-overview-placechange" className="d-flex align-items-center">
            <p className="fs-4 fw-bolder pe-2 mb-0"></p>
            <i className="fas fa-minus text-success fa-1x fs-4"></i>
        </div>
        <div id="highscores-overview-user" className="d-flex align-items-center">
            <div className="ps-3">
                <small className="text-light">user</small>
                <h6 className="mb-0">{username}</h6>
            </div>
        </div>
        <div id="highscores-overview-lvl" className="d-flex align-items-center">
            <div className="ps-3">
                <small className="text-light">userscore</small>
                <h6 className="mb-0">0</h6>
            </div>
        </div>
        <div id="time" className="text-center bg-primary py-3 me-3" style={{ width: "120px", height: "50px", justifySelf: "flex-end" }}>
            <h6>{score}</h6>
        </div>
    </div>
)

export default HighscoreElement