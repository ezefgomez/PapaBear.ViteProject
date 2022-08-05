import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemtListFolder/ItemListContainer';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from 'styled-components'

function App() {

  return (  
        <>
          <BrowserRouter>

            <Navbar />

            <Content>

            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:CategoriaId' element={<ItemListContainer />} />
              <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
            </Routes>

            <ItemListContainer />

            </Content>

          </BrowserRouter>
        </>
  )
}

export default App

const Content = styled.div`
height: calc(100vh - 85px)
background: #2c2c2c
background: linear-gradient(#373331, #27332d)
`