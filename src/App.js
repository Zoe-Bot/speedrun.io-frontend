import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'


const App = () => {
    return React.createElement(
        "div",
        { id: "important" },
        [React.createElement("h1", {}, "Hello"),
        React.createElement(Pet, { name: "Luna", animal: "cat", breed: "havanise" }),
        React.createElement(Pet, { name: "Haha", animal: "bird", breed: "havanise" }),
        React.createElement(Pet, { name: "Pepper", animal: "cat", breed: "havanise" })
        ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))