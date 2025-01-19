import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import RouteService from "../service/RouteService";

const AddRoute = () => {
    const [name, setName] = useState('');
    const [gpxfile, setGpxfile] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    const saveOrUpdateRoute = (e) => {
        e.preventDefault();

        if (!name || !gpxfile) {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        const route = { name, gpxfile };

        if (id) {     // Existe
            RouteService.updateRoute(id, route).then((response) => {
                console.log(response.data);
                navigate('/rutas');
            }).catch(error => {
                console.log(error);
            })
        } else {    // No existe
            RouteService.createRoute(route).then((response) => {
                console.log("datos enviados al backend: ", route);
                console.log(response.data);
                navigate('/rutas');
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        if(id) {
            RouteService.getRouteById(id)
                .then((response) => {
                    setName(response.data.name);
                    setGpxfile(response.data.gpxfile);
            })
                .catch((error) => {
                    console.log(error);
            })
        }
    }, [id])


    const title = () => {
        return id ? <h2 className="fs-3 text-center mb-2 mt-2"> <strong>Modificar ruta</strong></h2> : <h2 className="fs-3 text-center mb-2 mt-2"> <strong>Agregar ruta</strong></h2>
    }
    

    return (
        <div className="container border rounded pt-2 pb-4 shadow">
            <h1 className="fs-3">Registro de rutas</h1>
            <p>
                ¡Bienvenido a la sección de creación de rutas!
                Completa el siguiente formulario con la información relevante para agregar una nueva ruta a nuestra base de datos.
                Asegúrate de proporcionar detalles precisos para que podamos ofrecer a los visitantes la mejor experiencia posible.
            </p>
            <hr />
            {title()}
            <form onSubmit={saveOrUpdateRoute}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre de la ruta</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="gpxFile" className="form-label">Ruta del archivo GPX</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="gpxFile" 
                        value={gpxfile}
                        onChange={(e) => {
                            console.log("Nuevo valor para gpxFile: ", e.target.value);
                            setGpxfile(e.target.value);
                        }}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                <Link to="/rutas" className="btn btn-danger ms-2">Cancelar</Link>
            </form>
        </div>
    )
};

export default AddRoute;