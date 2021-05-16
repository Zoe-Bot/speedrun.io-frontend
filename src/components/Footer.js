import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Footer = () => (
    <>
    <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-4">
            <div className="col pb-4 pb-md-0">
                <img src={logo} className="img-fluid" width="200px"></img>
                <p><i className="far fa-copyright"></i> 2021. All Rights reserved.</p>
                <div>
                    <a href="https://www.instagram.com/" className="text-white pe-2"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.github.com/" className="text-white pe-2"><i className="fab fa-github"></i></a>
                    <a href="https://www.facebook.com/" className="text-white pe-2"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
            {/* TODO: Make component */}
            <div className="col">
                <h5 className="fst-italic">Games</h5>
                <ul className="list-unstyled">
                    <li><Link to="/game">dope</Link></li>
                </ul>
            </div>
            <div className="col">
            <h5 className="fst-italic">Pages</h5>
                <ul className="list-unstyled">
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/maps">Maps</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            <div className="col">
            <h5 className="fst-italic">Others</h5>
                <ul className="list-unstyled">
                    <li><Link to="/">Imprint</Link></li>
                    <li><Link to="/">Data policies</Link></li>
                    <li><Link to="/">Terms and Rules</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </>
)

export default Footer