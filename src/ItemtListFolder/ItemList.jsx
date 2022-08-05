import React from 'react'
import Producto from './Producto'
import styled from 'styled-components'

export default function ItemList({ productos }) {
    return (
        <>
            <Box>
                <h2> Lista de productos </h2>
                        {productos.map((product) => {
                            return <Producto key={product.id} {...product} />
                        })}
            </Box>
        </>
    )
}

const Box = styled.div`
    width: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`