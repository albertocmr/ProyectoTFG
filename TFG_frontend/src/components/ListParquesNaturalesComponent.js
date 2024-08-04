import React, { useEffect, useState } from 'react';
import ParqueNaturalService from '../service/ParqueNaturalService';
import { Link } from 'react-router-dom';
import Search from './Search';

export const ListParquesNaturalesComponent = () => {
    const [parquesNaturales, setParquesNaturales] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        listarParquesNaturales();
    }, []);

    const listarParquesNaturales = () => {
        ParqueNaturalService.getAllParquesNaturales().then(response => {
            setParquesNaturales(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteParqueNatural = (parqueId) => {
        ParqueNaturalService.deleteParqueNatural(parqueId).then((response) => {
            listarParquesNaturales();
        }).catch(error => {
            console.log(error);
        });
    };

    const filteredParquesNaturales = parquesNaturales.filter(parque =>
        parque.nombre.toLowerCase().includes(searchTerm.toLowerCase())
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
                        <th>Ciudad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredParquesNaturales.map(parque => (
                        <tr key={parque.id}>
                            <td>{parque.id}</td>
                            <td>{parque.nombre}</td>
                            <td>{parque.ciudad}</td>
                            <td>
                                <Link className='btn btn-info btn-sm' to={`/edit-parque/${parque.id}`}>Modificar</Link>
                                <button
                                    style={{ marginLeft: "10px" }}
                                    className='btn btn-danger btn-sm'
                                    onClick={() => deleteParqueNatural(parque.id)}
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

export default ListParquesNaturalesComponent;
