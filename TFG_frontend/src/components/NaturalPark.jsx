import React from 'react';


const NaturalParkComponent = (props) => {

    return (
        <div>
            <article>
                <h3>
                    {props.name}
                </h3>
                <p>
                    Se encuentra en {props.province}
                </p>
                <p>
                    Consulta las restricciones de este parque natural.
                </p>
                <a className="btn btn-primary" href={"parques-naturales/" + props.perimeterfile} target="_blank" rel="noopener noreferrer">
                    Restricciones del parque
                </a>


            </article>
        </div>
    )
}


export default NaturalParkComponent;