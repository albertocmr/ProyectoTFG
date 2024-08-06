import React, { useEffect, useState } from 'react';
import NaturalPark from './NaturalPark';
import '../styles/NaturalParks.css';
import NaturalParkService from '../service/NaturalParkService'

const NaturalParks = () => {
  const [naturalParks, setNaturalParks] = useState([])
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    NaturalParkService.getAllNaturalParks()
      .then(response => {
        setNaturalParks(response.data)
      })
      .catch(error => {
        console.error('Error when obtaining natural parks: ', error);
      })
  })


  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  const groupedNaturalParks = naturalParks.reduce((acc, naturalPark) => {
    const { province } = naturalPark;
    if (!acc[province]) {
      acc[province] = [];
    }

    acc[province].push(naturalPark);
    return acc;
  }, {});

  return (
    <section className="px-10 py-6 mx-auto max-w-7xl">
      <h2 className="font-bold mb-4">Parques Naturales</h2>

      {Object.keys(groupedNaturalParks).map((province, index) => (
      <div className="dropdown mb-3" key={index}>
        <div className="dropdown-item justify-between items-center p-2 rounded-lg shadow-sm cursor-pointer transition-colors duration-300 hover:bg-gray-200" onClick={() => toggle(index)}>
          <h3 className='font-bold'>{ province } </h3>
          <span>{selected === index ? '-' : '+'}</span>
        </div>
        {selected === index && (
          <div className="dropdown-content">
            {groupedNaturalParks[province].map((naturalPark, idx) => (
              <NaturalPark key={idx} name={naturalPark.name} province={naturalPark.province} perimeterfile={naturalPark.perimeterfile} />
            ))}
          </div>
        )}
      </div>
      ))}

    </section>
  );
};

export default NaturalParks;