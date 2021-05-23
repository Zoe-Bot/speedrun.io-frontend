import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitButton from '../components/SubmitButton'
import { useTitle } from '../customHooks/useTitle'

const Register = () => {
    useTitle("Register")
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = async e => {
        e.preventDefault()
        const result = await fetch('http://localhost:3001/v1/users/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await result.json()

        console.log(data)
    }


    return (
        <div className="container d-flex flex-column min-vh-100 my-5 py-lg-5">
            <div className="row login-form-container mx-auto mb-4">
                <div className="col-12">
                    <h1 className="fst-italic">Welcome back</h1>
                    <h6 className="fst-italic">Enter your details to create your account</h6>
                </div>
            </div>
            <div className="row login-form-container mx-auto">
                <div className="col-12">
                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fst-italic fw-bolder">Username</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="Username" aria-describedby="username" onChange={e => setUsername(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fst-italic fw-bolder">E-Mail</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" aria-describedby="email" onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fst-italic fw-bolder">Passwort</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="terms-check" />
                            <label className="form-check-label fst-italic" htmlFor="terms-check">I Agree the <Link to="/">Terms and Conditions</Link></label>
                        </div>
                        <SubmitButton text="Submit" />
                    </form>
                </div>
                </div>
            </div>
    )

}

export default Register