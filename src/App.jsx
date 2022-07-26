import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar';
import Novedades from './Novedades';
import CardArticulos from './cardArticulos';

function App() {

  return (  
        <div style={{ background: "#F5F3E5", width: "100vw", height: "100vh"}}>

          <Navbar />

          <CardArticulos backgroundColor="grey" title="Remera" price="$ 4500" description="¿Buscás una remera para tus entrenamientos o competencia? Nuestra remera  te mantiene seco y absorbe el sudor, su tecnología antiolor te permite estar enfocado." />

          <Novedades />

        </div>
  );

}

export default App