import React, { useState } from "react"

export default function agregarArticulos () {

    const [count, setCount] = useState(0);

return (

    <div style={{margin: "0", padding:"10px", width: "250px", display: "inline-flex", fontSize: "1em", position: "relative", left: "50px"}}>
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
    </div>

)
}