import React from 'react'

const ProfileHighscoreElement = ({ mapname, position, lowestposition, score, bgtransparent }) => (
    <div className={"col-12 profile-highscores py-3 " + (bgtransparent ? 'bg-transparent' : 'bg-primary-transparent')}>
        <div id="map" className="d-flex align-items-center">
            <div id="highscores-image" style={{backgroundImage: `url('http://picsum.photos/480/320')`}}></div>
            <div className="ps-3">
                <small className="text-muted">map</small>
                <h6 className="mb-0">Super Mario</h6>
            </div>
        </div>
        <div id="position" className="d-flex align-items-center justify-content-sm-center">
            <h4 className="mb-0 pe-1">6.</h4>
            <p className="mb-0">of 10.000</p>
        </div>
        <div id="score" className="text-center bg-primary py-3 me-3" style={{ width: "120px", height: "50px", justifySelf: "flex-end" }}>
            <h6>01:30:001</h6>
        </div>
    </div>
)

export default ProfileHighscoreElement