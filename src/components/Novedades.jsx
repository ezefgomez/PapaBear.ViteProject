import React from 'react'
import CardArticulos from './cardArticulos'

const Novedades = () => {

    const saludar = () => {
        console.log("Hola soy la funcion saludar de novedades, mis articulos están espectaculares")
    } 

    return (
        <div>
            <div>
                <h4>Novedades - Estas son nuestras promociones de la semana</h4>
            </div>
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en V" price="$ 3500" description="Muy buena remera con estampado del pato lucas" saludar={saludar} />
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en H" price="$ 3500" description="Muy buena remera con estampado del pato lucas" />
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en I" price="$ 3500" description="Muy buena remera con estampado del pato lucas" />
        </div>
    )
}

export default Novedades