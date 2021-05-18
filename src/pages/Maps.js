import React from "react"
import MapList from '../components/MapList'
import avatar from '../assets/img/avatar.png'
import { Link } from "react-router-dom"

const Maps = () => {

    return (
        <div className="container fst-italic mb-5">
            <div className="row mb-3">
                <div className="col-12">
                    <h1>All Maps</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-9">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <form className="input-group bg-primary-transparent">
                                <input type="search" className="form-control py-2 ps-4" id="search" aria-describedby="search" placeholder="Search mapname, tags..." />
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </form>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-end align-items-center">
                            <p className="mb-0 pe-2">Sort by</p>
                            <div className="dropdown">
                                <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Default</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        <div className="col">
                            <div className="card bg-primary-transparent">
                                <div id="card-img"></div>
                                <div className="card-body mx-3 mb-3">
                                    <small className="text-muted">easy</small>
                                    <h5 className="card-title">Super Mario</h5>
                                    <div className="d-flex">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <Link className="ms-auto" to='/'><i className="fas fa-play"></i></Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">

                        </div>
                        <div className="col">

                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <h3>Filter</h3>
                </div>
            </div>
        </div>
    )
}

export default Maps