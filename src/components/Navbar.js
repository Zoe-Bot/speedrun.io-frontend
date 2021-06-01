import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png';
import LoginRegisterButtons from './LoginRegisterButtons';
import NavbarProfile from './NavbarProfile';
import useToken from '../customHooks/useToken'

const NavBar = () => {
    const {token, setToken} = useToken()
    console.log(token)

    return (<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container mt-3 mb-4">
            <Link className="navbar-brand" to="/"><img src={logo} className="img-fluid" width="200"></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <i className="fas fa-bars"></i>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ps-lg-3">
                <li className="nav-item"><NavLink className="nav-link" to="/" exact={true} activeClassName="active">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/game" activeClassName="active">Game</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/leaderboard" activeClassName="active">Leaderboard</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/maps" activeClassName="active">Maps</NavLink></li>
            </ul>
            {
                token && <NavbarProfile />
            }
            {
                !token && <LoginRegisterButtons />
            }
        </div>
        </div>
    </nav>)
}

export default NavBar