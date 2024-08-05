import React, { useState,  useEffect } from "react";
import NaturalParkService from "../service/NaturalParkService";
import { Link, useParams, useNavigate } from "react-router-dom";

export const AddNaturalParkComponent = () => {

    const [name, setName] = useState('');
    const [province, setProvince] = useState('');
    const [perimeterfile, setPerimeterfile] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    const saveOrUpdateNaturalPark = (e) => {
        e.preventDefault();
        const naturalPark = {name, province, perimeterfile};
            
        if(id){     // Existe
            NaturalParkService.updateNaturalPark(id,naturalPark).then((response) => {
                console.log(response.data);
                navigate('/gestion');
            }).catch(error => {
                console.log(error);
            })
        } else {    // No existe
            NaturalParkService.createNaturalPark(naturalPark).then((response) => {
                console.log(response.data);
                navigate('/gestion');
            }).catch(error => {
                console.log(error);
            })
        }
    }


    useEffect(() => {
        NaturalParkService.getNaturalParkById(id).then((response) => {
            setName(response.data.name);
            setProvince(response.data.province);
            setPerimeterfile(response.data.perimeterfile);
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
            <h1 className="fs-3">Registro de parques naturales</h1>
            <p class="bg-gray-100 border-l-4 border-gray-500 p-4 rounded text-gray-600 text-lg my-4">
            ¡Bienvenido a la sección de creación de parques naturales!
            Completa el siguiente formulario con la información relevante para agregar un nuevo parque a nuestra base de datos. 
            Asegúrate de proporcionar detalles precisos para que podamos ofrecer a los visitantes la mejor experiencia posible.
            </p>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">  { title() }</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    
                                    <label className="form-label">Nombre</label>
                                    <div class="form-floating mb-3">
                                    <input 
                                        type="text" name="name"
                                        className="form-control"
                                        placeholder=""
                                        value={ name }
                                        onChange={(e) => setName(e.target.value)}
                                        ></input>
                                        <label for="floatingInput">Nombre del parque natural</label>
                                        </div>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Provincia</label>
                                    <div class="form-floating mb-3">
                                    <input 
                                        type="text" name="province"
                                        placeholder="" className="form-control"
                                        value={ province }
                                        onChange={(e) => setProvince(e.target.value)}
                                    ></input>
                                    <label for="floatingInput">Provincia del parque natural</label>
                                </div>
                                </div>


                                <div className="form-group mb-2">
                                    <label className="form-label">Perimetro</label>
                                    <div class="form-floating mb-3">
                                    <input 
                                        type="text" name="perimeterfile"
                                        placeholder="" className="form-control"
                                        value={ perimeterfile }
                                        onChange={(e) => setPerimeterfile(e.target.value)}
                                    ></input>
                                    <label for="floatingInput">Nombre del archivo con el perimetro</label>
                                
                                </div>
                                
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateNaturalPark(e)}>Guardar</button>
                                &nbsp;&nbsp;
                                <Link to='/gestion' className='btn btn-danger'>Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

    )
};








export default AddNaturalParkComponent;