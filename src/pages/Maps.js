import React from "react"
import MapList from '../components/MapList'

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
                        <div className="col-12 col-lg-4 d-flex justify-content-end">
                            <p>Sort by</p>
                            <div class="dropdown ps-2">
                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Default</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <h4>Filter</h4>
                </div>
            </div>
        </div>
    )
}

export default Maps