import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useState from 'react-usestateref'
import useToken from '../customHooks/useToken'

const NavbarProfile = () => {
    const [username, setUsername, usernameRef] = useState()
    const { token, setToken } = useToken()

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        const fetchUser = async () => {
            const result = await fetch(`http://localhost:3001/v1/auth/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token.access_token
                }
            })
            console.log('Bearer ' + token.access_token)
            console.log(result.status)
            if (result.status == 401) {
                localStorage.clear()
                return props.history.push('/error')
            }

            const body = await result.json()
            setUsername(body.username)
        }
        fetchUser()
    }, [token])

    return (<>
        <div className="dropdown ms-auto">
            <div className="d-flex align-items-center position-relative">
                <div>
                    <h6 className="text-info border-bottom border-light pb-2 pe-4">{username}</h6>
                    <small>lvl 10</small>
                </div>
                <a className="dropdown-toggle stretched-link" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-chevron-down text-white ms-2"></i></a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item link-primary" to="/profile">Profile</Link></li>
                    <li><Link id="logout" className="dropdown-item link-primary" to="/" onClick={logout}>Logout</Link></li>
                </ul>
            </div>
        </div>
    </>)
}



export default NavbarProfile