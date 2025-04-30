import React, { useEffect, useState } from 'react';
import NaturalPark from './NaturalPark';
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
  }, [])

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
    <div className="container p-4">
      <section className="bg-white shadow-xl rounded-2xl border mx-auto max-w-full lg:max-w-4xl lg:p-6 p-2">
        <h1 className="font-bold fs-3 mb-4">Parques Naturales</h1>

        {Object.keys(groupedNaturalParks).map((province, index) => (
          <div className="dropdown mb-3" key={index}>
            <button 
              className="dropdown-item justify-between items-center p-2 rounded-lg shadow-sm cursor-pointer transition-colors duration-300 hover:bg-gray-200" 
              onClick={() => toggle(index)}>
              <h3 className='font-bold'>{province} </h3>
              <span className='icon'>{selected === index ? '-' : '+'}</span>
            </button>
            <div 
              className={`dropdown-content ${selected === index ? 'expanded' : ''}`} 
              style={{ maxHeight: selected === index ? '1000px' : '0', transition: 'max-height 1.0s ease-in-out' }}
            >
              {selected === index && groupedNaturalParks[province].map((naturalPark, idx) => (
                <NaturalPark key={idx} name={naturalPark.name} province={naturalPark.province} perimeterfile={naturalPark.perimeterfile} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NaturalParks;
