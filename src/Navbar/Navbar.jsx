import React from 'react'
import carrito from './carrito.png'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-collapse">
                <h1 style={{color: "black", width: "300px", display: "inline-block"}}>PapaBear supply</h1>
                <div className="navbar-nav" style={{width: "300px",  display: "inline-block"}}>
                    <button type="button" style={{backgroundColor:"grey",  display: "inline-block"}}>Nuestros Productos</button>
                </div>
                <div className="navbar-nav" style={{color: "white", width: "300px",  display: "inline-block"}}>
                    <button type="button" style={{backgroundColor:"grey"}}>Sobre Nosotros</button>
                </div>
                <div className="navbar-nav" style={{color: "white", width: "300px",  display: "inline-block"}}>
                    <button type="button" style={{backgroundColor:"grey"}}>Contactanos</button>
                </div>
                <div className="navbar-nav" style={{color: "white", width: "100px",  display: "inline-block"}}>
                    <button type="button" style={{backgroundColor:"grey"}}><img src={carrito} alt="" style={{width: "100px", height: "60px"}} /></button>
                </div>
            </div>
        </nav>
    )
}
