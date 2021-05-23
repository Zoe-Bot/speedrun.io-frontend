import React from 'react'
import { useTitle } from '../customHooks/useTitle'

const Error = () => {
    useTitle("Error")

    return (
        <h1>Something went wrong</h1>
    )
}

export default Error