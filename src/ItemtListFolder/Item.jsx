import React from 'react'
import BoxCarrito from '../components/BoxCarrito'

export default function Item({ producto }) {

    return (
        <>
            <div style={{width: "200px", height: "300px", margin: "5px", backgroundColor: "grey", border: "1px solid black"}}>
                {JSON.stringify(producto)}
                <BoxCarrito />
            </div>
        </>
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