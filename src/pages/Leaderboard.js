import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import { useTitle } from '../customHooks/useTitle'

const Leaderboard = () => {
    useTitle("Leaderboard")
    const [users, setUsers, usersRef] = useState()

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await fetch(`${process.env.REACT_APP_BASE_URL}/users`)
            const body = await result.json()
            setUsers(body)
            //console.log("user", usersRef.current)
        }
        fetchUsers()
    }, [])

    return (
        <div className="container">
            <h1>Leaderboard</h1>
            <ul>
                {users && users.map((user, key) => (
                    <li key={key}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

export default Leaderboard