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
import Login from './Login'
import Signup from './Signup';

const App = () => {
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/users" component={Users} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    )
}

render(<App />, document.getElementById("root"))