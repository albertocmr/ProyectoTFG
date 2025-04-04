import React from 'react';
import '../styles/NaturalPark.css';


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
                    Su archivo de perimetro es {props.perimeterfile}
                </p>
                <a className="btn btn-primary" href={"parques-naturales/" + props.perimeterfile} target="_blank" rel="noopener noreferrer">
                    Restricciones del parque
                </a>


            </article>
        </div>
    )
}


export default NaturalParkComponent;