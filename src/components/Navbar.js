import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png';
import LoginRegisterButtons from './LoginRegisterButtons';
import NavbarProfile from './NavbarProfile';
import useToken from '../customHooks/useToken'

const NavBar = () => {
    const {token, setToken} = useToken()
    console.log(token)

    return (<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container mb-4">
            <Link className="navbar-brand" to="/"><img src={logo} className="img-fluid" width="200"></img></Link>
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