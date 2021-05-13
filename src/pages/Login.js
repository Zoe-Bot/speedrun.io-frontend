import React, { useState } from 'react'

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

const Login = ({ setToken }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        // TODO: change to 200 when its changed in backend
        if(token.statusCode != 500 && token.statusCode != 401)
            setToken(token)
        else
            document.querySelector('#login-form small').style.display = 'block'
    }

    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter username..." onChange={e => setUsername(e.target.value)} required />

            <label htmlFor="password">Passwort</label>
            <input type="password" name="password" placeholder="Enter password..." onChange={e => setPassword(e.target.value)} required />

            <button type="submit">Submit</button>
            <small style={{display: 'none'}}>Login Failed!</small>
        </form>
    )
}

export default Login
