// React
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

//Bootstrap js
import 'bootstrap';

// Pages
import Index from './pages/Index'
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import Maps from './pages/Maps'
import MapOverview from './pages/MapOverview'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile';
import Error from './pages/Error'

// Component
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

//Custom Hook
import useToken from './customHooks/useToken'

const App = () => {
    const {token, setToken, isToken} = useToken()
    console.log("token", token)

    return (
        <div>
            <Router>
            <NavBar />
                <Switch>
                    <Route path="/leaderboard" component={Leaderboard}/>
                    <Route path="/game" component={Game}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <Route path="/maps" component={Maps} />
                    <Route path="/map/:id" component={MapOverview} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login}/>
                    <Route path="/error" component={Error} />
                    <Route path="/" component={Index} exact />
                    <Route component={Error} />
                </Switch>
            <Footer />
            </Router>
        </div>
    )
}

export default App