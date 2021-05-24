import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import { useTitle } from "../customHooks/useTitle"

const Maps = () => {
    useTitle("Maps")
    const [maps, setMaps, mapsRef] = useState()

    useEffect(() => {
        const fetchMaps = async () => {
            const result = await fetch('http://localhost:3001/v1/maps/frontend')
            const body = await result.json()
            setMaps(body)
        }
        fetchMaps()
    }, [])

    return (
        <div className="container fst-italic mb-5">
            <div className="row mb-3">
                <div className="col-12">
                    <h1>All Maps</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-9">
                    <div className="row mb-3">
                        <div className="col-12 col-lg-8">
                            <form className="input-group bg-primary-transparent">
                                <input type="search" className="form-control py-2 ps-4" id="search" aria-describedby="search" placeholder="Search mapname, tags..." />
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </form>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-end align-items-center">
                            <p className="mb-0 pe-2">Sort by</p>
                            <div className="dropdown">
                                <a className="dropdown-toggle text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Default</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
                        {console.log(maps)}
                        {maps && maps.map((map, key) => {
                            return <div key={key} className="col mb-3">
                                <Card headline={map.name} subline={map.difficulty} link={`/maps/${map.slug}`} />
                            </div>
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link border-0 bg-transparent" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
                                        </a>
                                    </li>
                                    <li className="page-item pe-3"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item pe-3"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link border-0 bg-transparent" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 px-md-4 py-4 px-lg-5 py-lg-5 bg-primary-transparent">
                    <h3 className="mb-3">Filter</h3>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="featured" />
                        <label className="form-check-label" htmlFor="featured">Featured</label>
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="latest" />
                        <label className="form-check-label" htmlFor="latest">Latest</label>
                    </div>
                    <hr></hr>
                    <h5>Difficulty</h5>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="beginner" />
                        <label className="form-check-label" htmlFor="beginner">Beginner</label>
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="intermediate" />
                        <label className="form-check-label" htmlFor="intermediate">Intermediate</label>
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="expert" />
                        <label className="form-check-label" htmlFor="expert">Expert</label>
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="impossible" />
                        <label className="form-check-label" htmlFor="impossible">Impossible</label>
                    </div>
                    <hr></hr>
                    <h5>Most popular Tags</h5>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="jump" />
                        <label className="form-check-label" htmlFor="jump">Jump</label>
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="run" />
                        <label className="form-check-label" htmlFor="run">Run</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maps