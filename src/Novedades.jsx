import React from 'react'
import CardArticulos from './cardArticulos'

const Novedades = () => {
    return (
        <div>
            <div>
                <h4>Novedades - Estas son nuestras promociones de la semana</h4>
            </div>
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en V" price="$ 3500" description="Muy buena remera con estampado del pato lucas" />
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en H" price="$ 3500" description="Muy buena remera con estampado del pato lucas" />
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en I" price="$ 3500" description="Muy buena remera con estampado del pato lucas" />
        </div>
    )
}

export default Novedades