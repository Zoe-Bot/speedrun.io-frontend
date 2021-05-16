import React from 'react'
import { Link } from 'react-router-dom'

const NavbarProfile = () => {
    const logout = () => {
        localStorage.clear();
        location.reload();
    }

    return (<>
        <li className="ms-auto list-unstyled pe-3"><Link to="/profile">Profile</Link></li>
        <button id="logout" onClick={logout} className="list-unstyled"><Link to="/">Logout</Link></button>
    </>)
}
    


export default NavbarProfile