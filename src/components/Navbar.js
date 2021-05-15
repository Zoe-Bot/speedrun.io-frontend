import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" width="200"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav border-start ps-3">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/game">Game</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/maps">Maps</Link></li>
                <li className="nav-item ms-auto"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            </ul>
        </div>
        </div>
    </nav>
)

export default NavBar