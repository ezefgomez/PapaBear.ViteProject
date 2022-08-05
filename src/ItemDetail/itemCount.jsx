import React from 'react'

export default function ItemCount({ stock, initial, onAdd}) {

    const [count, setCount] = useState(initial || 1)
    const [stock, setStock] = useState()

    return ( <>
        <div className=" row left text">Stock: {stock}</div>
        <button>-</button>
        <p>{count}</p>
        <button>+</button>
        <button onClick = {() => onAdd(count)}>Agregar al carrito</button>
        </>
        )
}