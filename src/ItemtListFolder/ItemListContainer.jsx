import React, { useEffect, useState } from 'react'
import productosJSON from "../data/productos.json"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const containerStyle = {
    color: "white",
    height: "94,5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    background: "grey"
}

export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const {Categoria} = useParams()

    useEffect(() => {
        const miPromesa = new Promise((res, rej) => {
            setTimeout(() => {
                if (!Categoria) res(productosJSON)
                else res(productosJSON.filter(producto => producto.categorias.includes(Categoria)))
                res(productosJSON)
            }, 2000)
        })
        miPromesa
        .then ((res) => setProductos(res))
        .catch((err) => console.log(err))
    }, [Categoria])

    return (
        <div style={containerStyle}>

        <h2> Lista de productos </h2>

        <h3> {Categoria} </h3>

        <ItemList productos={productos} /> 

        </div>
    )
}
