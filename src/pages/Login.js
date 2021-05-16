import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import useToken from '../customHooks/useToken'

// TODO: Move to useEffects
async function loginUser(credentials) {
    let response = await fetch('http://localhost:3000/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    let data = await response.json()
    return data
}

const Login = (props) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const { token, setToken } = useToken()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })

        if (token.access_token != " ") {
            setToken(token)
            props.history.push('/');
            location.reload();
        }
        else
            document.querySelector('#login-form small').style.display = 'block'
    }


    return (
        <div className="container vh-100">
            <div className="row">
                <div className="col-12">
                    <h1 className="fst-italic">Welcome back</h1>
                    <h6 className="fst-italic">New here? <Link to="/register">Register</Link></h6>
                </div>
            </div>
            <form id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter username..." onChange={e => setUsername(e.target.value)} required />

                <label htmlFor="password">Passwort</label>
                <input type="password" name="password" placeholder="Enter password..." onChange={e => setPassword(e.target.value)} required />

                <button type="submit">Submit</button>
                <small style={{ display: 'none' }}>Login Failed!</small>
            </form>
        </div>
    )
}

export default Login
