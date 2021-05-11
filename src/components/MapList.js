import React from "react"
import { Link } from 'react-router-dom'

const MapList = ({ maps }) => (
    <table>
        <thead>
            <tr>
                <th>Mapname</th>
                <th>Author</th>
                <th>Difficulty</th>
            </tr>
        </thead>
      
        <tbody>
            {maps.map((map, key) => (
                <tr key={key} >
                    <td>
                        <Link to={`/map/${map.id}`}>
                            {map.name}
                        </Link>
                    </td>
                    <td>
                        {map.authorId}
                    </td>
                    <td>
                        {map.difficulty}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default MapList