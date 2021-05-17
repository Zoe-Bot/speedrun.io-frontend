import React, { useEffect, useState } from "react"
import avatar from '../assets/img/avatar.png'
import useToken from '../customHooks/useToken'

const Profile = (props) => {
    const [username, setUsername] = useState()
    const { token, setToken } = useToken()

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
            if (result.status == 401) {
                localStorage.clear()
                return props.history.push('/error')
            }

            const body = await result.json()
            setUsername(body.username)
        }
        fetchUser()
    }, [token])

    return (
        <>
        <div className="container">
            <div className="row">
                <div id="profile-info" className="col-12 col-lg-4 fst-italic">
                    <div className="border border-2 border-primary">
                        <div id="profile-avatar" style={{ backgroundImage: avatar }}></div>
                    </div>
                    <div id="info" className="d-flex flex-column justify-content-center">
                        <div className="border-bottom mb-2">
                            <h1 className="text-break pe-3">{username}</h1>
                            <h6 className="bg-primary text-center py-2">lvl 10</h6>
                        </div>
                        <div>
                            <p className="pe-3 ">total play time</p>
                            <p className="fw-bolder">03:00h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
        
        </div>
        </>
    )
}

export default Profile