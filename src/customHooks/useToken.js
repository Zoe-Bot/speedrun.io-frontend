import { useState } from 'react'

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken
    }
    
    const [token, setToken] = useState(getToken())

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken)
    }
    
    const isToken = () => {
        return localStorage.getItem('token') != ''
    }

    return {
        isToken,
        setToken: saveToken,
        token
    }
}

export default useToken