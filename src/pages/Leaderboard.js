import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import { useTitle } from '../customHooks/useTitle'
import HighscoreElement from '../components/HighscoreElement'

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
            <div className="row">
                <div className="col-12 mb-3">
                    <h1>Leaderboard</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-9 mb-3">
                    {users && users.map((user, key) => (
                        <HighscoreElement key={key} position={key + 1} username={user.username} score={"lvl 13"} bgtransparent={key % 2 != 0 ? true : false} />
                    ))}
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link border-0 bg-transparent" href="#" aria-label="Previous">
                                <span aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
                            </a>
                        </li>
                        <li className="page-item pe-3"><a className="page-link" href="#">1</a></li>
                        <li className="page-item pe-3"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link border-0 bg-transparent" href="#" aria-label="Next">
                                <span aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Leaderboard