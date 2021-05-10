import React from 'react'
import { withSignIn } from 'react-auth-kit'
import {connect} from 'react-redux';
import {userPostFetch} from './redux/Actions';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        if (this.props.signIn({
            token: res.data.token,
            expiresIn: res.data.expiresIn,
            tokenType: "Bearer",
            authState: res.data.authUserState
        })) {
            console.log("sign in")
        } else {
            console.error("login failed")
        }
        event.preventDefault()
    }

    render() {
        return (
            <form id="login-form" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter username..." value={this.state.username} onChange={this.handleChange} required />

                <label htmlFor="password">Passwort</label>
                <input type="password" name="password" placeholder="Enter password..." value={this.state.password} onChange={this.handleChange} required />

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login
