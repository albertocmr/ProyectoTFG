import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import HomeComponent from './components/HomeComponent';
import NaturalParksComponent from './components/NaturalParks';
import AddNaturalParkComponent from './components/AddNaturalParkComponent';
import ListNaturalParksComponent from './components/ListNaturalParksComponent'
import CreateTrack from './components/CreateTrack';
import MapComponent from './components/MapComponent'
import Footer from './components/Footer'
import SierraHuetor from './assets/endpoints-naturalparks/sierra_huetor';
import SierraNevada from './assets/endpoints-naturalparks/sierra_nevada';

function App () {
  return (
      <div className="app-container">
          <BrowserRouter>
            <Header />
            <main class="d-flex flex-grow-1 w-100 mx-auto p-4 p-md-5 p-lg-4 bg-white rounded shadow-sm">
              <Routes>
                <Route path='/' element={<HomeComponent/>}/>
                <Route path='/createTrack' element={<CreateTrack />} />
                <Route path='/loadTrack' element={<MapComponent />} />
                <Route path='/parques-naturales' element={<NaturalParksComponent />} />
                <Route path='/add-parque' element={<AddNaturalParkComponent />} />
                <Route path='/edit-parque/:id' element={<AddNaturalParkComponent />} />
                <Route path='/gestion' element={<ListNaturalParksComponent />} />

                <Route path='/parques-naturales/sierra_nevada' element={<SierraNevada />} />
                <Route path='/parques-naturales/sierra_huetor' element={<SierraHuetor />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;


