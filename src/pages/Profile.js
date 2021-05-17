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
        <div className="container mb-3 mb-lg-5">
            <div className="row">
                <div id="profile-info" className="col-12 col-sm-10 col-lg-6 col-xl-5 fst-italic">
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
        <div className="container-fluid border-top border-primary">
            <div className="container pt-3 pt-lg-5">
                <div className="row fst-italic">
                    <div className="col-12 col-lg-4">
            	        <h3 className="pb-2">Statistics</h3>
                        <div id="statistics" className="row">
                            <div className="text-center p-5" style={{backgroundColor: "rgba(69, 97, 238, 0.2)"}}>
                                <i class="fas fa-medal fa-4x text-primary pb-3"></i>
                                <h4 className="fs-2">2</h4>
                                <h5>Hidden</h5>
                            </div>
                            <div className="text-center p-5" style={{backgroundColor: "rgba(69, 97, 238, 0.2)"}}>
                                <i class="fas fa-medal fa-4x text-primary pb-3"></i>
                                <h4 className="fs-2">2</h4>
                                <h5>Hidden</h5>
                            </div>
                            <div className="text-center p-5" style={{backgroundColor: "rgba(69, 97, 238, 0.2)"}}>
                                <i class="fas fa-medal fa-4x text-primary pb-3"></i>
                                <h4 className="fs-2">2</h4>
                                <h5>Hidden</h5>
                            </div>
                            <div className="text-center p-5" style={{backgroundColor: "rgba(69, 97, 238, 0.2)"}}>
                                <i class="fas fa-medal fa-4x text-primary pb-3"></i>
                                <h4 className="fs-2">2</h4>
                                <h5>Hidden</h5>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-7">

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile