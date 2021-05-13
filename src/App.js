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
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage'

// Components
import NavBar from './Navbar'

//Custom Hook
import useToken from './customHooks/useToken'

const App = () => {
    const {token, setToken} = useToken()
    console.log("token", token)

    // TODO: Logout with sessionStorage.clear()
    if(!token)
        return <Login setToken={setToken} />

    return (
        <div>
            <Router>
            <NavBar />
                <Switch>
                    <Route path="/profile" component={Profile}/>
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