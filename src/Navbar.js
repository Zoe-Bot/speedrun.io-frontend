import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/maps-list">Maps List</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </nav>
)

export default NavBar