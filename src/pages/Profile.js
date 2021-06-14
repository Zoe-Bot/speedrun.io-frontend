import React, { useEffect } from "react"
import useState from 'react-usestateref'
import avatar from '../assets/img/avatar.png'
import ProfileHighscoreElement from "../components/ProfileHighscoreElement"
import { useTitle } from "../customHooks/useTitle"
import useToken from '../customHooks/useToken'

const Profile = (props) => {
    const [username, setUsername, usernameRef] = useState()
    const { token, setToken } = useToken()

    useEffect(() => {
        const fetchUser = async () => {
            const result = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token.access_token
                }
            })
            //console.log('Bearer ' + token.access_token)
            //console.log(result.status)
            if (result.status == 401) {
                localStorage.clear()
                return props.history.push('/error')
            }

            const body = await result.json()
            setUsername(body.username)
        }
        fetchUser()
    }, [token])

    useTitle(usernameRef.current ?? "Loading...")

    return (
        <div id="profile">
            <div className="container mb-3 mb-lg-5">
                <div className="row">
                    <div id="info-container" className="col-12 col-sm-10 col-lg-6 col-xl-5 fst-italic">
                        <div className="border border-2 border-primary">
                            <div id="avatar" style={{backgroundImage: `url('http://picsum.photos/480/320')`}}></div>
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
            <div className="container-fluid border-top border-primary pb-5">
                <div className="container pt-3 pt-lg-5">
                    <div className="row fst-italic">
                        <div className="col-12 col-lg-5 col-xl-4 mb-4">
                            <h3 className="pb-2">Statistics</h3>
                            <div id="statistics" className="mb-3">
                                <div className="text-center bg-primary-transparent p-3 p-sm-5">
                                    <i className="fas fa-medal fa-4x text-primary pb-3"></i>
                                    <h4 className="fs-2">2</h4>
                                    <h5>Hidden</h5>
                                </div>
                                <div className="text-center bg-primary-transparent p-3 p-sm-5">
                                    <i className="fas fa-medal fa-4x text-gold pb-3"></i>
                                    <h4 className="fs-2">17</h4>
                                    <h5>Gold</h5>
                                </div>
                                <div className="text-center bg-primary-transparent p-3 p-sm-5">
                                    <i className="fas fa-medal fa-4x text-silver pb-3"></i>
                                    <h4 className="fs-2">17</h4>
                                    <h5>Silver</h5>
                                </div>
                                <div className="text-center bg-primary-transparent p-3 p-sm-5">
                                    <i className="fas fa-medal fa-4x text-bronze pb-3"></i>
                                    <h4 className="fs-2">50</h4>
                                    <h5>Bronze</h5>
                                </div>
                            </div>
                            <div id="most-played-map" className="col-12 bg-primary-transparent py-3">
                                <div id="most-played-map-image" style={{backgroundImage: `url('http://picsum.photos/480/320')`}}></div>
                                <div className="ps-3">
                                    <h6>Most played map</h6>
                                    <h4>Super Mario</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-xl-8">
                            <h3 className="pb-2">Highscores</h3>
                            <ProfileHighscoreElement />
                            <ProfileHighscoreElement bgtransparent={true} />
                            <ProfileHighscoreElement />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile