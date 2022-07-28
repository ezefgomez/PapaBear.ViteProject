import React from 'react'
import CardArticulos from './cardArticulos'

const imprimirArticulos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let articulo = {
                backgroundColor: "#89DFDC",
                title: "Remera escote en V",
                price: "$ 3500",
                description: "Muy buena remera con estampado de Bugs Bunny",
                stock: "23"
            }
        resolve(articulo)
        }, 3000)
    })
}

imprimirArticulos()
    .then((result) => {
        console.log(result)
    }).
    catch((err) => {
        console.log("Productos en venta")
    })



const Novedades = () => {
    return (
        <div>
            <div>
                <h4 style={{ fontFamily: "Times New Roman", textAlign: "center", fontSize: "2em" }}>Novedades - Estas son nuestras promociones de la semana</h4>
            </div>
            <div style={{ display: "flex"}}>
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en V" price="$ 3500" description="Muy buena remera con estampado del pato lucas"  stock="23" />
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en H" price="$ 3500" description="Muy buena remera con estampado del pato lucas"  stock="14" />
            <CardArticulos backgroundColor="#89DFDC" title="Remera escote en I" price="$ 3500" description="Muy buena remera con estampado del pato lucas"  stock="8" />
            </div>
        </div>
    )
}

export default Novedades