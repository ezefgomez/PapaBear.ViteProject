import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const ProductListContainer = () => {
    const [products,setProduct]=useState([])

    useEffect(()=>{
    setProduct([
    {
        id:1,
        title:"Remera" ,
        price: "$ 4500",
        description: "¿Buscás una remera para tus entrenamientos o competencia? Nuestra remera  es para vos",
        stock: "12"
    },
    {
        id:2,
        title:"Pantalon" ,
        price: "$ 6500",
        description: "El mejor pantalon del mercado, comodo y estilizado",
        stock: "5"
    },
    {  
        id:3,  
        title:"Buzo" ,
        price: "$ 7400",
        description: "Tenes frío, nosotros tenemos los mejores buzos",
        stock: "7"
    },
    {
        id:4,
        title:"Zapatillas" ,
        price: "$ 11200",
        description: "Las zapatillas más comodas del mercado",
        stock: "3"
    }]
    )
    },[])


return (
    <>
    <h1 className='font-bold'>Productos disponibles</h1>
    <div className='bg-gray-100 p-4 m-5'>
    <ProductList products={products}/>
    </div>
    </>
)
}

export default ProductListContainer