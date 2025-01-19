import React, { useEffect, useState} from 'react';
import RouteService from '../service/RouteService';
import { Link } from 'react-router-dom';
import Search from './Search';



const ListRoutes = () => {
    const [routes, setRoutes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        listRoutes();
    }, []);

    const listRoutes = () => {
        RouteService.getAllRoutes().then(response => {
            setRoutes(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteRoute = (routeId) => {
        RouteService.deleteRoute(routeId).then((response) => {
            listRoutes();
        }).catch(error => {
            console.log(error);
        });
    };

    const filteredRoutes = routes.filter(route =>
        route.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <strong><h2 className="fs-2 text-center">Lista de rutas</h2></strong>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <Link to='/add-ruta' className='btn btn-primary btn-sm'>Agregar ruta</Link>
                <Search onSearch={setSearchTerm} />
            </div>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ruta</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRoutes.map(route => (
                        <tr key={route.id}>
                            <td>{route.id}</td>
                            <td>{route.name}</td>
                            <td>{route.gpxfile}</td>
                            <td>
                                <Link 
                                    className='btn btn-info btn-sm' 
                                    to={`/edit-ruta/${route.id}`}>
                                    Editar
                                </Link>
                                <button 
                                    className='btn btn-danger btn-sm ms-1' 
                                    onClick={() => deleteRoute(route.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )


}

export default ListRoutes;