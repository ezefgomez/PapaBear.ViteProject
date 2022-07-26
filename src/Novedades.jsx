import React from 'react'
import Item from './ItemtListFolder/Item'


const Novedades = () => {
    return (
        <div>
            <div>
                <h4 style={{ fontFamily: "Times New Roman", textAlign: "center", fontSize: "2em" }}>Novedades - Estas son nuestras promociones de la semana</h4>
            </div>
            <div style={{ display: "flex"}}>
            <Item backgroundColor="#89DFDC" title="Remera escote en V" price="$ 3500" description="Muy buena remera con estampado del pato lucas"  stock="23" />
            <Item backgroundColor="#89DFDC" title="Remera escote en H" price="$ 3500" description="Muy buena remera con estampado del pato lucas"  stock="14" />
            <Item backgroundColor="#89DFDC" title="Remera escote en I" price="$ 3500" description="Muy buena remera con estampado del pato lucas"  stock="8" />
            </div>
        </div>
    )
}

export default Novedades