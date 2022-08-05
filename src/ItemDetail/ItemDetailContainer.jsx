import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

    const [productos, setProductos] = useState(null)
    const [error, setError] = useState(false)
    const {productoId} = useParams()

    const getProductosById = () => {
        fetch(`productos.json/${id}`)
        .then(productosData => productosData.json)
        .then(data => setProductos({ title: data.title }))
        .catch(err => setError("Error fetching productos"))
    }

    useEffect (() => {
        getProductosById(productoId)
    }), [productoId]

return (
    <div style={containerStyle}>
        <h2> LISTA DE PRODUCTOS </h2>
        <ItemList productos={productos} />
    </div>
)

}
