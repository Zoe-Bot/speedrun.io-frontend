// React
import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

// Pages
import HomePage from './pages/HomePage'
import MapsListPage from './pages/MapsListPage'
import MapPage from './pages/MapPage'
import Login from './pages/Login'
import Register from '/pages/Register'
import ErrorPage from './pages/ErrorPage'

// Components
import NavBar from './Navbar'

const App = () => {
    return (
        <div>
            <Router>
            <NavBar />
                <Switch>
                    <Route path="/maps-list" component={MapsListPage} />
                    <Route path="/map/:id" component={MapPage} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={HomePage} exact />
                    <Route component={ErrorPage} />
                </Switch>
            </Router>
        </div>
    )
}

render(<App />, document.getElementById("root"))