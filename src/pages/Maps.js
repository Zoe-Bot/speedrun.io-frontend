import React from "react"
import MapList from '../components/MapList'

const Maps = () => {

    return (
        <div className="container fst-italic">
            <div className="row mb-3">
                <div className="col-12">
                    <h1>All Maps</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-9">
                    <div className="col-12 col-lg-8">
                        <form className="input-group bg-primary-transparent">
                            <input type="search" className="form-control py-2 ps-4" id="search" aria-describedby="search" placeholder="Search mapname, tags..." />
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6">

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