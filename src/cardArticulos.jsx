import React from 'react'
import BoxCarrito from './components/BoxCarrito'

const CardArticulos = ({title, price, description, stock}) => {

    return (
            <div style={{width: "200px", height: "300px", margin: "5px", backgroundColor: "grey"}}>
                <h2 style={{textAlign:"center"}}> {title} </h2>
                <h3 style={{textAlign:"center"}}> Precio: {price} </h3>
                <h4 style={{textAlign:"center"}}> Stock: {stock} </h4>
                <p style={{textAlign:"center"}}> {description} </p>
                <div><BoxCarrito /></div>
            </div>
    )

}
/*
export default function cardArticulos(props) {
    return (
        <div>
            <div style={{width: "200px", height: "250px", background: props.backgroundColor, margin: "20px", display: "inline-block"}}>
                <h2 style={{textAlign:"center"}}> {props.title} </h2>
                <h4 style={{textAlign:"center"}}> {props.price} </h4>
                <p style={{textAlign:"center"}}> {props.description} </p>
            </div>
        </div>
    )
}
*/

export default CardArticulos