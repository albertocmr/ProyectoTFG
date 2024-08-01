
import React from 'react';


function ParqueNatural (props) { 

    return(
        <>
            <article>
                <h3>
                    {props.name}
                </h3>
                <p>
                    Se encuentra en {props.ciudad}
                </p>
                <button >
                    Ir al parque
                </button>
            </article>
        </>
    )
}


export default ParqueNatural;