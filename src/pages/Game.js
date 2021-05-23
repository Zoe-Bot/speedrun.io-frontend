import React from 'react'
import { useTitle } from '../customHooks/useTitle'

const Game = () => {
    useTitle("Game")

    return (
        <>
            <div className="container">
                <h1>Game</h1>
                <div id="game"></div>
            </div>
        </>
    )
}

export default Game