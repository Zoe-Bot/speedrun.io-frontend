import React from 'react'
import { Link } from 'react-router-dom'

const LoginRegisterButtons = () => (
    <>
        <Link id="login" className="btn btn-primary text-white text-uppercase text-decoration-none ms-auto me-4 " to="/login">Login</Link>
        <Link id="register" className="text-primary text-decoration-none" to="/register">Register</Link>
    </>
)

export default LoginRegisterButtons