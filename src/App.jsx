import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar';
import Novedades from './Novedades';
import ItemListContainer from './ItemtListFolder/ItemListContainer';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (  
        <>
          <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idProducto' element={<ItemDetailContainer />} />
            <Route path='*' element={<p>404</p>} />
          </Routes>

          <div style={{ background: "#F5F3E5", width: "100vw", height: "100vh", margin: "5px"}}>

          <ItemListContainer />

          <Novedades />

          </div>
          </BrowserRouter>
        </>
  )
}
/*

*/
export default App