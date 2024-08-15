import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
    
    return (
        <div >
            <header className="d-flex flex-wrap justify-content-center py-4 mb-4 border-bottom rounded">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
                    {/* Podría añadir aquí un logo cuando lo tenga */}
                    <Link to={"/"} className="ml-4 text-white">
                        <h1 className="m-0 h3">parkTracker webSite</h1>
                    </Link>
                </a>

                <nav className="d-none d-md-flex">
                    <ul className="nav nav-pills" >
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" aria-current="page">Inicio</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/createTrack" className="nav-link text-white">Crea tu ruta</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/loadTrack" className="nav-link text-white">Carga una ruta</Link>
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