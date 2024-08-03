import React from 'react';
import ParquesNaturales from './components/ParquesNaturales';
import Map from './components/Map';
import './styles/App.css';
import Footer from './components/Footer'

function App () {
  return (
    <div className="app-container">
      <header>
        <h1>Web Restricciones Parques Naturales-Espacios Protegidos</h1>
      </header>

      <main>
        <div className="parquesNaturales-container">
          <ParquesNaturales />
        </div>
        <div className="map-container">
          <Map />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
