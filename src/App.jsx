import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar';
import Novedades from './Novedades';
import ProductListContainer from './productList/ItemListContainer';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (  
        <>
          <div style={{ background: "#F5F3E5", width: "100vw", height: "100vh", margin: "5px"}}>

          <Navbar />
          
          <ProductListContainer />

          <Novedades />

          </div>
        </>
  )
}
/*
<BrowserRouter>

<Navbar />

<Routes>
  <Route path='/' element={<ProductListContainer />} />
  <Route path='/category/:idCategoria' element={<ProductListContainer />} />
  <Route path='/item/:idProducto' element={<ItemDetailContainer />} />
  <Route path='*' element={<p>404</p>} />

  <ProductListContainer />

  <Novedades />

</Routes>
<div style={{ background: "#F5F3E5", width: "100vw", height: "100vh", margin: "5px"}}>

</div>
</BrowserRouter>
*/
export default App