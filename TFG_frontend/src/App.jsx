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

function App () {
  return (
      <div className="app-container">

        <BrowserRouter>
          <Header />
          <main class="flex-1 min-w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
          <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/createTrack' element={<CreateTrack />} />
            <Route path='/loadTrack' element={<MapComponent />} />
            <Route path='/parques-naturales' element={<NaturalParksComponent />} />
            <Route path='/add-parque' element={<AddNaturalParkComponent />} />
            <Route path='/edit-parque/:id' element={<AddNaturalParkComponent />} />
            <Route path='/gestion' element={<ListNaturalParksComponent />} />
          </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;


