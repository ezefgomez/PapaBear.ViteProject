import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar';
import Novedades from './Novedades';
import ProductListContainer from './ProductListContainer';

function App() {

  return (  
        <>
          <div style={{ background: "#F5F3E5", width: "100vw", height: "100vh", margin: "5px"}}>

          <div>
            <Navbar />
          </div>

            <ProductListContainer />

          <div>
            <Novedades />
          </div>

          </div>
        </>
  )
}

export default App