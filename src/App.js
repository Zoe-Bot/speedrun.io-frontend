import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'


const App = () => {
    // return React.createElement(
    //     "div",
    //     { id: "important" },
    //     [React.createElement("h1", {}, "Hello"),
    //     React.createElement(Pet, { name: "Luna", animal: "cat", breed: "havanise" }),
    //     React.createElement(Pet, { name: "Haha", animal: "bird", breed: "havanise" }),
    //     React.createElement(Pet, { name: "Pepper", animal: "cat", breed: "havanise" })
    //     ]
    // )
    return (
        <div>
            <h1 id="Hello">Adopt me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Havanese" />
            <Pet name="Doink" animal="Cat" breed="Havanese" />
        </div>
    )
}

render(<App />, document.getElementById("root"))