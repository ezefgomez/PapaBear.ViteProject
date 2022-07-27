import React, { useState } from "react"

export default function agregarArticulos () {

    const [numero, setNumero] = useState(0)

    function handleMenos () {
        setNumero(numero - 1)
    }

    function handleMas () {
        setNumero(numero + 1)
    }

return (
    <div style={{margin: "0", padding:"10px",color: "black", width: "250px", display: "inline-flex", fontSize: "1em", position: "relative", left: "50px"}}>

        <button disabled={numero <= 0} onClick={handleMenos} style={{display: "inline-block", margin: "4px"}}> -1 </button>
        <h3 style={{display: "inline-block", margin: "4px"}}>{numero}</h3>
        <button onClick={handleMas} style={{display: "inline-block", margin: "4px"}}> +1 </button>

    </div>
)
}