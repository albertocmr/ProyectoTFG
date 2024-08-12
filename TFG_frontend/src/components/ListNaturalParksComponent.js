import React, { useEffect, useState } from 'react';
import NaturalParkService from '../service/NaturalParkService';
import { Link } from 'react-router-dom';
import Search from './Search';

export const ListNaturalParksComponent = () => {
    const [naturalParks, setNaturalParks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        listNaturalParks();
    }, []);

    const listNaturalParks = () => {
        NaturalParkService.getAllNaturalParks().then(response => {
            setNaturalParks(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteNaturalPark = (naturalParkId) => {
        NaturalParkService.deleteNaturalPark(naturalParkId).then((response) => {
            listNaturalParks();
        }).catch(error => {
            console.log(error);
        });
    };

    const filteredNaturalParks = naturalParks.filter(naturalPark =>
        naturalPark.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <strong><h2 className="fs-2 text-center">Lista de parques naturales</h2></strong>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <Link to='/add-parque' className='btn btn-primary btn-sm'>Agregar parque natural</Link>
                <Search onSearch={setSearchTerm} />
            </div>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Provincia</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredNaturalParks.map(park => (
                        <tr key={park.id}>
                            <td>{park.id}</td>
                            <td>{park.name}</td>
                            <td>{park.province}</td>
                            <td>
                                <Link className='btn btn-info btn-sm' to={`/edit-parque/${park.id}`}>Modificar</Link>
                                <button
                                    style={{ marginLeft: "10px" }}
                                    className='btn btn-danger btn-sm'
                                    onClick={() => deleteNaturalPark(park.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListNaturalParksComponent;
