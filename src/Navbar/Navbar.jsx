import React from 'react'
import carrito from './carrito.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div style={{color: "black", width: "500px"}}>
                <h1>PapaBear supply</h1>
            </div>
            <div className="navbar-collapse">
                <div className="navbar-nav" style={{width: "200px"}}>
                    <button style={{backgroundColor:"grey"}}>Nuestros Productos</button>
                </div>
                <div className="navbar-nav" style={{color: "white", width: "200px"}}>
                    <button style={{backgroundColor:"grey"}}>Sobre Nosotros</button>
                </div>
                <div className="navbar-nav" style={{color: "white", width: "200px"}}>
                    <button style={{backgroundColor:"grey"}}>Contactanos</button>
                </div>
                <div className="navbar-nav" style={{color: "white", width: "200px"}}>
                    <button style={{backgroundColor:"grey"}}><img src={carrito} alt="" style={{width: "100px", height: "60px"}} /></button>
                </div>
            </div>
        </nav>
    )
}