import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import Users from './Users'
import LoginForm from './LoginForm'



const App = () => {
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

render(<App />, document.getElementById("root"))