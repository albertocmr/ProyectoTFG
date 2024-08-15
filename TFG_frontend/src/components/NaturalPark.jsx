import React from 'react';


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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ir al parque
                </button>
                
            </article>
        </div>
    )
}


export default NaturalParkComponent;