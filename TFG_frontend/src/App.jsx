import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeComponent from './components/HomeComponent';
import NaturalParksComponent from './components/NaturalParks';
import AddNaturalParkComponent from './components/AddNaturalParkComponent';
import ListNaturalParks from './components/ListNaturalParks';
import CreateTrack from './components/CreateTrack';
import MapComponent from './components/MapComponent';
import Footer from './components/Footer';
import geojsonImports from './assets/restrictions/geojsonImports';
import ListRoutes from './components/ListRoutes';
import AddRoute from './components/AddRoute';

function App () {
  return (
      <div className="app-container">
          <BrowserRouter>
            <Header />
            <main className="d-flex flex-grow-1 w-100 mx-auto p-4 p-md-5 p-lg-4 bg-white rounded shadow-sm">
              <Routes>
                <Route path='/' element={<HomeComponent/>} />
                <Route path='/createTrack' element={<CreateTrack />} />
                <Route path='/loadTrack' element={<MapComponent />} />
                <Route path='/parques-naturales' element={<NaturalParksComponent />} />
                <Route path='/add-parque' element={<AddNaturalParkComponent />} />
                <Route path='/edit-parque/:id' element={<AddNaturalParkComponent />} />
                <Route path='/gestion' element={<ListNaturalParks />} />
                <Route path='/rutas' element={<ListRoutes />} />
                <Route path='/add-ruta' element={<AddRoute />} />
                <Route path='/edit-ruta/:id' element={<AddRoute />} />

                <Route path="/parques-naturales/sierra_nevada" element={<geojsonImports.SierraNevadaRestrictions />} />
                <Route path="/parques-naturales/sierra_huetor" element={<geojsonImports.SierraHuetorRestrictions />} />
                <Route path="/parques-naturales/bahia_cadiz" element={<geojsonImports.BahiaCadizRestrictions />} />
                <Route path="/parques-naturales/cabo_gata" element={<geojsonImports.CaboGataRestrictions />} />
                <Route path="/parques-naturales/del_estrecho" element={<geojsonImports.DelEstrechoRestrictions />} />
                <Route path="/parques-naturales/despeniaperros" element={<geojsonImports.DespeniaperrosRestrictions />} />
                <Route path="/parques-naturales/los_alcornocales" element={<geojsonImports.LosAlcornocalesRestrictions />} />
                <Route path="/parques-naturales/montes_malaga" element={<geojsonImports.MontesMalagaRestrictions />} />
                <Route path="/parques-naturales/natural_doniana" element={<geojsonImports.DonianaRestrictions />} />
                <Route path="/parques-naturales/sierra_andujar" element={<geojsonImports.SierraAndujarRestrictions />} />
                <Route path="/parques-naturales/sierra_aracena" element={<geojsonImports.SierraAracenaRestrictions />} />
                <Route path="/parques-naturales/sierra_baza" element={<geojsonImports.SierraBazaRestrictions />} />
                <Route path="/parques-naturales/sierra_cardenia" element={<geojsonImports.SierraCardeniaRestrictions />} />
                <Route path="/parques-naturales/sierra_castril" element={<geojsonImports.SierraCastrilRestrictions />} />
                <Route path="/parques-naturales/sierra_cazorla" element={<geojsonImports.SierraCazorlaRestrictions />} />
                <Route path="/parques-naturales/sierra_grazalema" element={<geojsonImports.SierraGrazalemaRestrictions />} />
                <Route path="/parques-naturales/sierra_hornachuelos" element={<geojsonImports.SierraHornachuelosRestrictions />} />
                <Route path="/parques-naturales/sierra_magina" element={<geojsonImports.SierraMaginaRestrictions />} />
                <Route path="/parques-naturales/sierra_maria_los_velez" element={<geojsonImports.SierraMariaLosVelezRestrictions />} />
                <Route path="/parques-naturales/sierra_nieves" element={<geojsonImports.SierraNievesRestrictions />} />
                <Route path="/parques-naturales/sierra_norte_sevilla" element={<geojsonImports.SierraMorenaSevillaRestrictions />} />
                <Route path="/parques-naturales/sierra_tejeda" element={<geojsonImports.SierraTejedaRestrictions />} />
                <Route path="/parques-naturales/sierras_subbeticas" element={<geojsonImports.SierrasSubbeticasRestrictions />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;
