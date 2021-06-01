import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({headline, subline, link, thumbnail}) => (
    <div className="card bg-primary-transparent">
        <div id="card-img" style={{backgroundImage: `url(${thumbnail})`}}></div>
        <div className="card-body mx-3 mb-3">
            <small className="text-muted">{subline}</small>
            <h5 className="card-title">{headline}</h5>
            <div className="d-flex">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <Link className="ms-auto stretched-link link-primary" to={link}><i className="fas fa-play"></i></Link>
            </div>
        </div>
    </div>
)

export default Card