import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({headline, subline}) => (
    <div className="card bg-primary-transparent">
        <div id="card-img"></div>
        <div className="card-body mx-3 mb-3">
            <small className="text-muted">{headline}</small>
            <h5 className="card-title">{subline}</h5>
            <div className="d-flex">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <Link className="ms-auto stretched-link" to='/'><i className="fas fa-play"></i></Link>
            </div>
        </div>
    </div>
)

export default Card