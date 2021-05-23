import React from 'react';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useTitle } from '../customHooks/useTitle';

const Index = () => {
    useTitle("speedrun.io")

    return (
        <div className="container min-vh-100 pt-5">
            <div className="row mt-5">
                <div className="col text-center mt-0 mt-lg-5">
                    <img src={logo} className="img-fluid"></img>
                    <div>
                        <Link to="/game" className="gradient-button">
                            <span className="skew-fix">Play now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index