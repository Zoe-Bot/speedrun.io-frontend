import React from "react"
import MapList from '../components/MapList'
import maps from '../Maps'

const MapsListPage = () => {
    return (
        <>
            <h1>Maps</h1>
            <MapList maps={maps} />
        </>
    )
}

export default MapsListPage