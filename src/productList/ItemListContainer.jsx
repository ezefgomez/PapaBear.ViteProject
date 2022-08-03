import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer() {

    const [tienda, setTienda] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => {

    let productos = [
        {id:1, title:"Remera" , price: "$ 4500", imagen: "/", description: "¿Buscás una remera para tus entrenamientos o competencia? Nuestra remera  es para vos", idCategoria: "Vestimenta", stock: "12"},
        {id:2, title:"Pantalon" , price: "$ 6500", imagen: "/", description: "El mejor pantalon del mercado, comodo y estilizado", idCategoria: "Vestimenta", stock: "5"},
        {id:3, title:"Buzo", price: "$ 7400", imagen: "/", description: "Tenes frío, nosotros tenemos los mejores buzos", idCategoria: "Vestimenta-Abrigo", stock: "7"},
        {id:4, title:"Tabaquera" , price: "$ 2500", imagen: "/", description: "Las tabaqueras más facheras del mercado", idCategoria: "Accesorio", stock: "3"}
    ]

    const miPromesa = new Promise((res, rej) => {
        setTimeout(() => {
            if(!idCategoria){
                res(productos)
            } else {
                res(productos.filter((producto) => producto.idCategoria === idCategoria))
            }

        }, 2000)
    })

    miPromesa.then((res) => {
        setTienda(res)
    })
}, [tienda, setTienda, idCategoria])

return <ItemList tienda={tienda} />

}
