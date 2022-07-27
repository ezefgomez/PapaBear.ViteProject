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
    <div style={{margin: "0", padding:"10px",color: "black", width: "250px", display:"inline-block", fontSize: "1em"}}>

        <button disabled={numero <= 1} onClick={handleMenos}> -1 </button>
        <h1>{numero}</h1>
        <button onClick={handleMas}> +1 </button>

    </div>
)
}