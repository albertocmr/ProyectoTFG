import React, { useState,  useEffect } from "react";
import ParqueNaturalService from "../service/ParqueNaturalService";
import { Link, useParams, useNavigate } from "react-router-dom";

export const AddParqueNaturalComponent = () => {

    const [nombre, setNombre] = useState('');
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    const saveOrUpdateParqueNatural = (e) => {
        e.preventDefault();
        const parque = {nombre, ciudad};
            
        if(id){     // Existe
            ParqueNaturalService.updateParqueNatural(id,parque).then((response) => {
                console.log(response.data);
                navigate('/gestion');
            }).catch(error => {
                console.log(error);
            })
        } else {    // No existe
            ParqueNaturalService.createParqueNatural(parque).then((response) => {
                console.log(response.data);
                navigate('/gestion');
            }).catch(error => {
                console.log(error);
            })
        }
    }


    useEffect(() => {
        ParqueNaturalService.getParqueNaturalById(id).then((response) => {
            setNombre(response.data.nombre);
            setCiudad(response.data.ciudad);
        }).catch((error) => {
            console.log(error);
        })
    },[id])

    const title = () => {
        if(id) {
            return <h2 className="fs-3 text-center mb-2 mt-2"> <strong>Modificar parque natural</strong></h2>
        } else {
            return <h2 className="fs-3 text-center mb-2 mt-2"> <strong>Agregar parque natural</strong></h2>
            
        }
    }

    return (
        <div>
            <h1>Registro de parques naturales</h1>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">  { title() }</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nombre</label>
                                    <input 
                                        type="text"
                                        placeholder="Digite su nombre"
                                        name="nombre"
                                        className="form-control"
                                        value={ nombre }
                                        onChange={(e) => setNombre(e.target.value)}/>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Ciudad</label>
                                    <input 
                                        type="text"
                                        placeholder="Digite su ciudad"
                                        name="ciudad"
                                        className="form-control"
                                        value={ ciudad }
                                        onChange={(e) => setCiudad(e.target.value)}/>
                                </div>
                                
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateParqueNatural(e)}>Guardar</button>
                                &nbsp;&nbsp;
                                <Link to='/gestion' className='btn btn-danger'>Cancelar</Link>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

    )
}

export default AddParqueNaturalComponent;