import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import HomeComponent from './components/HomeComponent';
import NaturalParksComponent from './components/NaturalParks';
import AddNaturalParkComponent from './components/AddNaturalParkComponent';
import ListNaturalParks from './components/ListNaturalParks'
import CreateTrack from './components/CreateTrack';
import MapComponent from './components/MapComponent'
import Footer from './components/Footer'
import SierraHuetor from './assets/endpoints-naturalparks/sierra_huetor';
import SierraNevada from './assets/endpoints-naturalparks/sierra_nevada';
import RestriccionesGlobales from './assets/endpoints-naturalparks/RestriccionesGlobales';
import ListRoutes from './components/ListRoutes'
import AddRoute from './components/AddRoute'

function App () {
  return (
      <div className="app-container">
          <BrowserRouter>
            <Header />
            <main className="d-flex flex-grow-1 w-100 mx-auto p-4 p-md-5 p-lg-4 bg-white rounded shadow-sm">
              <Routes>
                <Route path='/' element={<HomeComponent/>}/>
                <Route path='/createTrack' element={<CreateTrack />} />
                <Route path='/loadTrack' element={<MapComponent />} />
                <Route path='/parques-naturales' element={<NaturalParksComponent />} />
                <Route path='/add-parque' element={<AddNaturalParkComponent />} />
                <Route path='/edit-parque/:id' element={<AddNaturalParkComponent />} />
                <Route path='/gestion' element={<ListNaturalParks />} />
                <Route path= '/rutas' element={<ListRoutes />} />
                <Route path='/add-ruta' element={<AddRoute />} />
                <Route path='/edit-ruta/:id' element={<AddRoute />} />

                <Route path='/parques-naturales/restricciones_globales' element={<RestriccionesGlobales />} />
                <Route path='/parques-naturales/sierra_huetor' element={<SierraHuetor />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;


