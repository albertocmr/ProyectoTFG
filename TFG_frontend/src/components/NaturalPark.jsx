import React from 'react';
import { Link } from 'react-router-dom';


const NaturalParkComponent = (props) =>{ 

    return(
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
                <Link class="btn btn-primary" to={`${props.perimeterfile}`}>Ir al parque</Link>
                
                
            </article>
        </div>
    )
}


export default NaturalParkComponent;