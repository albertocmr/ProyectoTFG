import React, { useEffect, useState } from 'react';
import NaturalParkService from '../service/NaturalParkService';
import Search from './Search';

const ListNaturalParks = () => {
    const [naturalParks, setNaturalParks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        listNaturalParks();
    }, []);


    const listNaturalParks = () => {
        NaturalParkService.getAllNaturalParks()
            .then(response => {
                setNaturalParks(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteNaturalPark = (naturalParkId) => {
        NaturalParkService.deleteNaturalPark(naturalParkId)
            .then((response) => {
                listNaturalParks();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const filteredNaturalParks = naturalParks.filter(naturalPark =>
        naturalPark.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container p-5">
            <div className="bg-white shadow-xl rounded-2xl border p-3">
                <h1 className="fs-2 text-center"><strong>Lista de parques naturales</strong></h1>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <a href="/addPark" className="btn btn-primary btn-sm">Agregar parque natural</a>
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
                                    <a href={`/editPark/${park.id}`} className="btn btn-info btn-sm">Modificar</a>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        className='btn btn-danger btn-sm'
                                        onClick={() => deleteNaturalPark(park.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListNaturalParks;
