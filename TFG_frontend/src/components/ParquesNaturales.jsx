import React, { useEffect, useState } from 'react';
import ParqueNatural from './ParqueNatural';
import '../styles/ParquesNaturales.css';
import ParqueNaturalService from '../service/ParqueNaturalService'

const ParquesNaturales = () => {
  const [parques, setParques] = useState([])
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    ParqueNaturalService.getAllParquesNaturales()
      .then(response => {
        setParques(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los parques naturales: ', error);
      })
  })


  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  const groupedParques = parques.reduce((acc, parque) => {
    const { ciudad } = parque;
    if (!acc[ciudad]) {
      acc[ciudad] = [];
    }

    acc[ciudad].push(parque);
    return acc;
  }, {});

  return (
    <section id="parques-naturales">
      <h2>Parques Naturales</h2>

      {Object.keys(groupedParques).map((ciudad, index) => (
      <div className="dropdown" key={index}>
        <div className="dropdown-item" onClick={() => toggle(index)}>
          <h3> { ciudad } </h3>
          <span>{selected === index ? '-' : '+'}</span>
        </div>
        {selected === index && (
          <div className="dropdown-content">
            {groupedParques[ciudad].map((parque, idx) => (
              <ParqueNatural key={idx} name={parque.nombre} ciudad={parque.ciudad} />
            ))}
          </div>
        )}
      </div>
      ))}

    </section>
  );
};

export default ParquesNaturales;
