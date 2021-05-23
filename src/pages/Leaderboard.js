import React from 'react'
import { useTitle } from '../customHooks/useTitle'

const Leaderboard = () => {
    useTitle("Leaderboard")

    return (
        <div className="container">
            <h1>Leaderboard</h1>
        </div>
    )
}

export default Leaderboard