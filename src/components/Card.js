import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({headline, subline, link, thumbnail, upvotes}) => (
    <div className="card bg-primary-transparent">
        <div id="card-img" style={{backgroundImage: `url(${thumbnail})`}}></div>
        <div className="card-body mx-3 mb-3">
            <small className="text-muted">{subline}</small>
            <h5 className="card-title">{headline}</h5>
            <div className="d-flex align-items-baseline">
                <p className="mb-0">{upvotes}</p>
                <i className="fas fa-caret-up text-primary fs-4 ps-1"></i>
                <Link className="ms-auto stretched-link link-primary" to={link}></Link>
            </div>
        </div>
    </div>
)

export default Card