import React, { useState } from 'react';
import ParqueNatural from './ParqueNatural';
import '../styles/ParquesNaturales.css';

const ParquesNaturales = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section id="parques-naturales">
      <h2>Parques Naturales</h2>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(1)}>
          <h3>Granada</h3>
          <span>{selected === 1 ? '-' : '+'}</span>
        </div>
        {selected === 1 && (
          <div className="dropdown-content">
            <ParqueNatural name="Sierra Nevada" ciudad="Granada" />
            <ParqueNatural name="Sierra de Huétor" ciudad="Granada" />
            <ParqueNatural name="Sierra de Baza" ciudad="Granada" />
            <ParqueNatural name="Sierra de Castril" ciudad="Granada" />
            <ParqueNatural name="Sierra de Tejeda, Almijara y Alhama" ciudad="Málaga y Granada" />
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(2)}>
          <h3>Málaga</h3>
          <span>{selected === 2 ? '-' : '+'}</span>
        </div>
        {selected === 2 && (
          <div className="dropdown-content">
            <ParqueNatural name="Montes de Málaga" ciudad="Málaga" />
            <ParqueNatural name="Sierra de las Nieves" ciudad="Málaga" />
            <ParqueNatural name="Los Alcornocales" ciudad="Málaga y Cádiz" />
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(3)}>
          <h3>Cádiz</h3>
          <span>{selected === 3 ? '-' : '+'}</span>
        </div>
        {selected === 3 && (
          <div className="dropdown-content">
            <ParqueNatural name='Bahía de Cádiz' ciudad='Cádiz' />
            <ParqueNatural name='del Estrecho' ciudad='Cádiz' />
            <ParqueNatural name='Sierra de Grazalema' ciudad='Málaga y Cádiz' />
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(4)}>
          <h3>Sevilla</h3>
          <span>{selected === 4 ? '-' : '+'}</span>
        </div>
        {selected === 4 && (
          <div className="dropdown-content">
            <ParqueNatural name='Doñana' ciudad='Cádiz, Huelva y Sevilla' />
            <ParqueNatural name='Sierra Morena de Sevilla' ciudad='Sevilla' />
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(5)}>
          <h3>Jaén</h3>
          <span>{selected === 5 ? '-' : '+'}</span>
        </div>
        {selected === 5 && (
          <div className="dropdown-content">
            <ParqueNatural name='Sierra de Andújar' ciudad='Jaén' />
            <ParqueNatural name='Despeñaperros' ciudad='Jaén' />
            <ParqueNatural name='Sierra de Cazorla, Segura y Las Villas' ciudad='Jaén' />
            <ParqueNatural name='Sierra Mágina' ciudad='Jaén' />
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(6)}>
          <h3>Almería</h3>
          <span>{selected === 6 ? '-' : '+'}</span>
        </div>
        {selected === 6 && (
          <div className="dropdown-content">
            <ParqueNatural name='Cabo de Gata-Níjar' ciudad='Almería' />
            <ParqueNatural name='Sierra María-Los Vélez' ciudad='Almería' />
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(7)}>
          <h3>Córdoba</h3>
          <span>{selected === 7 ? '-' : '+'}</span>
        </div>
        {selected === 7 && (
          <div className="dropdown-content">
            <ParqueNatural name='Sierras Subbéticas' ciudad='Córdoba' />
            <ParqueNatural name='Sierras de Hornachuelos' ciudad='Córdoba' />
            <ParqueNatural name='Sierras de Cardeña y Montoro' ciudad='Córdoba' />
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-item" onClick={() => toggle(8)}>
          <h3>Huelva</h3>
          <span>{selected === 8 ? '-' : '+'}</span>
        </div>
        {selected === 8 && (
          <div className="dropdown-content">
            <ParqueNatural name='Sierra de Aracena y Picos de Aroche' ciudad='Huelva' />
          </div>
        )}
      </div>

    </section>
  );
};

export default ParquesNaturales;
