import React from 'react';
import Map from './components/Map'; // Importa el componente Map
import './styles/App.css'; // Importa los estilos globales

function App() {
  return (
    <div className="App">
      <header>
        <h1>Web Restricciones Parques Naturales-Espacios Protegidos</h1>
      </header>
      <main>
        <section id="parques-naturales">
          <h2>Parques Naturales</h2>
          <article>
            <h3>Sierra Nevada</h3>
            <p>Se encuentra en Granada (Monachil)</p>
          </article>
          {/* Seguir añadiendo los parques naturales */}
        </section>
        <section id="reservas-naturales">
          <h2>Reservas Naturales</h2>
          <article>
            <h3>Laguna del Chinche</h3>
            <p>Se encuentra en Jaén (Chinche)</p>
          </article>
          {/* Seguir añadiendo las reservas naturales */}
        </section>
        <div className="map-container">
          <Map />
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Parques Naturales de Andalucía</p>
      </footer>
    </div>
  );
}

export default App;
