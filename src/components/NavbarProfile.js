import React from 'react'
import { Link } from 'react-router-dom'

const NavbarProfile = () => {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (<>
        <li className="ms-auto list-unstyled pe-3"><Link className="link-primary" to="/profile">Profile</Link></li>
        <li className="list-unstyled pe-3"><Link id="logout" className="link-primary" to="/" onClick={logout}>Logout</Link></li>
    </>)
}
    


export default NavbarProfile