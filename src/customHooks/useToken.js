import { useState } from 'react'

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('auth_token')
        const userToken = JSON.parse(tokenString)
        return userToken
    }
    
    const [token, setToken] = useState(getToken())

    const saveToken = (userToken) => {
        localStorage.setItem('auth_token', JSON.stringify(userToken.access_token))
        setToken(userToken.access_token)
    }

    return {
        setToken: saveToken,
        token
    }
}

export default useToken