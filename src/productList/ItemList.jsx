import React from 'react'
import Item from './Item'

export default function ItemList({tienda}) {
    return (
        <>
            {tienda.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </>
    )
}