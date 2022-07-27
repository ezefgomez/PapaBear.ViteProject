import React from 'react'
import carrito from './carrito.png'


export default function Navbar() {
    return (
        <nav>
            <div>
                <h1 style={{backgroundColor:"grey", margin: "0", padding:"10px",color: "black", width: "250px", display:"inline-block", fontSize: "2em"}}>PapaBear supply</h1>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>Nuestros Productos</button>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>Sobre Nosotros</button>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>Contactanos</button>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}><img src={carrito} alt="" style={{width: "50px", height: "30px"}} /></button>
            </div>
        </nav>
    )
}
