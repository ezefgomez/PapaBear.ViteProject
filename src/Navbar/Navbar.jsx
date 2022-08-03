import React from 'react'
import carrito from './carrito.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav>
            <div>
                <h1 style={{backgroundColor:"grey", margin: "0", padding:"10px",color: "black", width: "350px", display:"inline-block", fontSize: "2em"}}>
                    PapaBear supply
                </h1>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>
                    <Link to={'/'}>Home</Link>
                </button>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>
                    <Link to={'/category/:idCategoria'}>Productos</Link>
                </button>
                <button type="button" style={{backgroundColor:"#2964EC", height: "50px", width: "50px", marginRight: "300px", display:"inline-block"}}>
                    <img src={carrito} alt="" style={{width: "50px", height: "30px"}} />
                </button>
            </div>
        </nav>
    )
}

/*

                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>
                    <Link to={}>Articulo</Link>
                </button>

*/