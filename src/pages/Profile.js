import React, { useEffect } from "react"
import { Redirect } from "react-router"
import useToken from '../customHooks/useToken'
import Error from "./Error"


const Profile = (props) => {
    const {token, setToken} = useToken()

    useEffect(() => {
        const fetchUser = async () => {
            const result = await fetch(`http://localhost:3000/v1/auth/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token.access_token
                }
            })
            console.log('Bearer ' + token.access_token)
            console.log(result.status)
            if(result.status == 401) {
                localStorage.clear()
                return props.history.push('/error')
            }
                
            const body = await result.json()
        }
        fetchUser()
    })

    return (
        <>
            <h1>Profile</h1>
        </>
    )
}

export default Profile