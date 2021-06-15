import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitButton from '../components/SubmitButton'
import { useTitle } from '../customHooks/useTitle'
import useToken from '../customHooks/useToken'


const Login = (props) => {
    useTitle("Login")
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const { token, setToken } = useToken()

    const loginUser = async (credentials) => {
        let response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        let data = await response.json()
        return data
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        if (token.access_token) {
            setToken(token)
            props.history.push('/');
            window.location.reload();
        } else
            document.querySelector('#login-form small').style.display = 'block'
    }

    return (
        <div id="login" className="container d-flex flex-column min-vh-100 my-5 py-lg-5">
            <div className="row form-container mx-auto mb-4">
                <div className="col-12">
                    <h1 className="fst-italic">Welcome back</h1>
                    <h6 className="fst-italic">New here? <Link className="link-primary" to="/register">Register</Link></h6>
                </div>
            </div>
            <div className="row form-container mx-auto">
                <div className="col-12">
                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fst-italic fw-bolder">Username</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="Username" aria-describedby="username" onChange={e => setUsername(e.target.value)} required />
                        </div>
                        <div id="form-grid-password" className="mb-3">
                            <label htmlFor="password" className="form-label fst-italic fw-bolder">Passwort</label>
                            <input type="password" className="form-control order-1" id="password" name="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} required />
                            <div className="order-2 mt-3">
                                <small className="invalid-feedback order-2 mt-2 pb-2" style={{ display: 'none' }}>Wrong username or password!</small>
                                <SubmitButton text="Sign in" />
                            </div>
                            <Link className="link-light text-end" to="/">Forgott password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
