import { useEffect, useState } from 'react';
import NaturalPark from './NaturalPark';
import NaturalParkService from '../service/NaturalParkService';

const NaturalParks = () => {
  const [naturalParks, setNaturalParks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NaturalParkService.getAllNaturalParks()
      .then(response => {
        setNaturalParks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error when obtaining natural parks: ', error);
        setLoading(false);
      });
  }, []);

  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  const groupedNaturalParks = naturalParks.reduce((acc, park) => {
    const { province } = park;
    if (!acc[province]) acc[province] = [];
    acc[province].push(park);
    return acc;
  }, {});

  return (
    <div className="container bg-white p-4 rounded-xl">
      <section className="shadow-xl rounded-2xl border mx-auto max-w-full lg:max-w-4xl lg:p-4 p-2">
        <h1 className="font-bold text-center fs-2 mb-4">Parques Naturales</h1>

        {loading ? (
          <>
            {[...Array(6)].map((_, i) => (
              <div className="card mb-3 p-3" key={i}>
                <div className="placeholder-glow">
                  <span className="placeholder col-4 mb-2"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </div>
              </div>
            ))}
          </>
        ) : (
          Object.keys(groupedNaturalParks).map((province, index) => (
            <div className="dropdown mb-3" key={index}>
              <button 
                className="dropdown-item justify-between items-center p-2 rounded-lg shadow-sm cursor-pointer transition-colors duration-300 hover:bg-gray-200" 
                onClick={() => toggle(index)}
              >
                <h3 className='fw-bold'>{province}</h3>
                <span className='icon'>{selected === index ? '-' : '+'}</span>
              </button>
              <div 
                className={`dropdown-content ${selected === index ? 'expanded' : ''}`} 
                style={{ maxHeight: selected === index ? '1000px' : '0', transition: 'max-height 1.0s ease-in-out' }}
              >
                {selected === index && groupedNaturalParks[province].map((park, idx) => (
                  <NaturalPark key={idx} {...park} />
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default NaturalParks;
