import React from 'react'
import styled from 'styled-components'
/* import carrito from './carrito.png' */
import { Link } from 'react-router-dom'

const productosTypes = ["vestimenta", "calzado", "articulos"]

const linkStyle = { textDecoration: "none" }

const Navbar = () => {
    return (
        <Box>
            <TypesContainer>
                {
                    productosTypes.map((type, index) =>{
                        return <Link to={`/type/${type}`} style={{ textDecoration: "none" }}>
                                    <Type key={index}>{type.toUpperCase()}</Type>
                                </Link>
                    })
                }
            </TypesContainer>
        </Box>
    )
}

export default Navbar


const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #373331;
    height: 85px;
`

const TypesContainer = styled.div`
    display: flex;
`


const Type = styled.span`
    padding: 0 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: lightgrey;
    transition: 0.2s;
    padding-bottom: 2px;
    &:hover{
        color: white;
        padding-bottom: 0;
        border-bottom: 2px solid white;
    }

`

/*              <button type="button" style={{backgroundColor:"#2964EC", height: "50px", width: "50px", marginRight: "300px", display:"inline-block"}}>
                    <img src={carrito} alt="" style={{width: "50px", height: "30px"}} />
                </button>

                <h1 style={{backgroundColor:"grey", margin: "0", padding:"10px",color: "black", width: "350px", display:"inline-block", fontSize: "2em"}}>
                    PapaBear supply
                </h1>
*/ 