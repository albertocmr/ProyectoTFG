import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
  return (
    <div className="container-fluid rounded">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom rounded">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
            <use href="#bootstrap"></use>
            </svg>
            {/* Podría añadir aquí un logo cuando lo tenga */}
            <Link to="/" className="text-decoration-none">
                <h1 className="m-0">parkTracker webSite</h1>
            </Link>
            </a>
            <nav className="d-none d-md-flex">

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active text-white" aria-current="page">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/map" className="nav-link text-white">Crea tu ruta</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/parques-naturales" className="nav-link text-white">Parques Naturales</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gestion" className="nav-link text-white">Gestión</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default Header;


                        
<div class="container">
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <svg class="bi me-2" width="40" height="32">
    <use href="#bootstrap"></use>
    </svg>
    <span class="fs-4">Encabezado simple</span>
    </a>
        <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Características</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Precios</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Acerca de</a></li>
    </ul>
</header>
</div>
