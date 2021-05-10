import React from 'react'
import { connect } from 'react-redux';
import { userPostFetch } from './redux/actions';

export default class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: ""
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

    async handleSubmit(event) {
        event.preventDefault()
        const username = event.target.querySelector('input[name=username]').value
        const email = event.target.querySelector('input[name=email]').value
        const password = event.target.querySelector('input[name=password]').value
        
        console.log(event.target)
        const result = await fetch('http://localhost:3000/v1/users/create', {
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


    render() {
        return (
            <form id="login-form" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter username..." value={this.state.username} onChange={this.handleChange} required />
                
                <label htmlFor="email">E-Mail</label>
                <input type="text" name="email" placeholder="Enter email..." value={this.state.email} onChange={this.handleChange} required />

                <label htmlFor="password">Passwort</label>
                <input type="password" name="password" placeholder="Enter password..." value={this.state.password} onChange={this.handleChange} required />

                <button type="submit">Submit</button>
            </form>
        )
    }
}
