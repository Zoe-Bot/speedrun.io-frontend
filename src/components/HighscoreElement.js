import React from 'react'

const HighscoreElement = ({ position, username, score, bgtransparent }) => (
    <div id="highscores-overview" className={"col-12 py-3 px-4 px-md-5 " + (bgtransparent ? 'bg-transparent' : 'bg-primary-transparent')}>
        <h2 className="display-6 fw-bolder mb-0">{position}.</h2>
        <div className="d-flex align-items-center">
            <p className="fs-4 fw-bolder pe-2 mb-0"></p>
            <i className="fas fa-minus text-success fa-1x fs-4"></i>
        </div>
        <div className="d-flex align-items-center">
            <div className="ps-0 ps-md-3">
                <small className="text-light">user</small>
                <h6 className="mb-0">{username}</h6>
            </div>
        </div>
        <div id="score" className="text-center bg-primary py-3 me-3" style={{ width: "120px", height: "50px", justifySelf: "flex-end" }}>
            <h6>{score}</h6>
        </div>
    </div>
)

export default HighscoreElement