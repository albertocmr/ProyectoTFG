import React from 'react';
import ParquesNaturales from './components/ParquesNaturales';
import Map from './components/Map';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListParquesNaturales from './components/ListParquesNaturalesComponent'
import AddParqueNaturalComponent from './components/AddParqueNaturalComponent'

import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <div className="app-container">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/parques-naturales' element={<ParquesNaturales/>}></Route>
          <Route path='/map' element={<Map />}></Route>
          <Route path='/add-parque' element={<AddParqueNaturalComponent />}></Route>
          <Route path='/gestion' element={<ListParquesNaturales />}></Route>
          <Route path='/edit-parque/:id' element={<AddParqueNaturalComponent />}></Route>
          <Route path='/' element={<Map />}></Route>
          
        </Routes>
        

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
