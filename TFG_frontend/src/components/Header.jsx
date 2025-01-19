import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Title = () => (
    <div className="d-flex align-items-center">
        {/* Logo */}
        <h1 className="text-4x1 font-bool">ParkTracker</h1>
    </div>
);

const NavigationMenu = () => (
    <nav className="d-md-flex">
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to="/" className="nav-link text-white" aria-label="Ir a Inicio">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link to="/createTrack" className="nav-link text-white" aria-label="Crear ruta">Crea tu ruta</Link>
            </li>
            <li className="nav-item">
                <Link to="/loadTrack" className="nav-link text-white" aria-label="Cargar ruta">Carga una ruta</Link>
            </li>
            <li className="nav-item">
                <Link to="/parques-naturales" className="nav-link text-white" aria-label="Explorar parques naturales">Parques Naturales</Link>
            </li>
            <li className="nav-item">
                <Link to="/gestion" className="nav-link text-white" aria-label="Gestión de datos">Gestión</Link>
            </li>
            <li className="nav-item">
                <Link to="/rutas" className="nav-link text-white" aria-label="Rutas">Rutas</Link>
            </li>
        </ul>
    </nav>
);

const Header = () => {
    return (
        <div className="header-container">
            <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-4">
                <div className='max-w-4x1 mx-auto'>
                    <div className='flex items-center gap-6'>
                        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                            <Title />
                        </Link>
                        <NavigationMenu />
                    </div>
                </div>

            </header>
        </div>
    );
}

export default Header;
