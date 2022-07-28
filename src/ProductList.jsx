import React from 'react'
import CardArticulos from './cardArticulos'

const ProductList = ({products}) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
            products.map((producto,i)=>
                <CardArticulos key= {producto.id} title={producto.title} price={producto.price} stock={producto.stock} description={producto.description} />
            )
            }
        </div>  
    )
}

export default ProductList