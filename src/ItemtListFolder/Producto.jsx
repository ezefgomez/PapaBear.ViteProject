import { Padding } from '@mui/icons-material'
import React from 'react'


export default function Articulo({ producto }) {

    return (
        <Padding>
            <Link to={ "/producto/" + producto.id }>
                <ProductoCard>
                    <ImgContainer>
                        <img
                            src={producto.imagen}
                            alt={producto.title}
                            style={{ maxHeight: "200px", maxWidth: "160px" }}
                        />
                    </ImgContainer>
                    <NameContainer 
                    style={{ height: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <span style={{ fontSize: "1 rem" }}>
                            {producto.title.toUpperCase()}
                        </span>
                    </NameContainer>
                </ProductoCard>
            </Link>
        </Padding>
    )

}

/*
export default function Item(props) {
    return (
        <div>
            <div style={{width: "200px", height: "250px", background: props.backgroundColor, margin: "20px", display: "inline-block"}}>
                <h2 style={{textAlign:"center"}}> {props.title} </h2>
                <h4 style={{textAlign:"center"}}> {props.price} </h4>
                <p style={{  }}> {props.imagen} </p>
                <p style={{textAlign:"center"}}> {props.categoria} </p>
            </div>
        </div>
    )
}
*/