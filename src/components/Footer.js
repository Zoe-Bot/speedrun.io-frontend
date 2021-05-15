import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
    <>
    <h4>Footer</h4>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/maps">Maps</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </nav>
    </>
)

export default Footer