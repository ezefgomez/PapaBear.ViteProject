import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar';
import Novedades from './Novedades';
import CardArticulos from './cardArticulos';
import BoxCarrito from './components/BoxCarrito'

function App() {

  return (  

        <div style={{ background: "#F5F3E5", width: "100vw", height: "100vh", margin: "5px"}}>

          <div>
            <Navbar />
          </div>

          <div className="container">
            <CardArticulos backgroundColor="grey" title="Remera" price="$ 4500" description="¿Buscás una remera para tus entrenamientos o competencia? Nuestra remera  te mantiene seco y absorbe el sudor de forma super eficiente" />
            <CardArticulos backgroundColor="grey" title="Pantalon" price="$ 6500" description="El mejor pantalon del mercado, comodo y estilizado" />
            <CardArticulos backgroundColor="grey" title="Buzo" price="$ 7400" description="Tenes frío, nosotros tenemos los mejores buzos" />
            <CardArticulos backgroundColor="grey" title="Zapatillas" price="$ 11200" description="Las zapatillas más comodas del mercado" />
          </div>

          <div>
            <Novedades />
          </div>
            
          <div className="container">
            <BoxCarrito />
          </div>

        </div>
  );

}

export default App