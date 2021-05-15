import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" width="200"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav border-start border-light ps-3">
                <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/game">Game</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/maps">Maps</Link></li>
            </ul>
            <button className="btn btn-primary ms-auto me-4"><Link className="text-white text-uppercase text-decoration-none" to="/login">Login</Link></button>
            <a><Link className="text-primary text-decoration-none" id="register" to="/register">Register</Link></a>
        </div>
        </div>
    </nav>
)

export default NavBar