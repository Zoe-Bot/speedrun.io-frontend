import React from 'react'

const HighscoreElement = ({ position, username, userlevel, score, bgtransparent }) => (
    <div id="highscores-overview" className={"col-12 align-items-center py-2 px-3 px-md-5 " + (bgtransparent ? 'bg-transparent' : 'bg-primary-transparent')}>
        <h2 className="h3 fw-bolder mb-0">{position}.</h2>
        <div className="d-flex align-items-baseline">
            <p className="mb-0">{username}</p>
            <small className="text-light ps-2">{userlevel}</small>
        </div>
        <div id="score" className="text-center fst-normal">
            <p className="mb-0">{score}</p>
        </div>
    </div>
)

export default HighscoreElement