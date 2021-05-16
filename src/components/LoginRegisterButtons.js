import React from 'react'
import { Link } from 'react-router-dom'

const LoginRegisterButtons = () => (
    <>
        <button className="btn btn-primary ms-auto me-4"><Link className="text-white text-uppercase text-decoration-none" to="/login">Login</Link></button>
        <a><Link className="text-primary text-decoration-none" id="register" to="/register">Register</Link></a>
    </>
)

export default LoginRegisterButtons