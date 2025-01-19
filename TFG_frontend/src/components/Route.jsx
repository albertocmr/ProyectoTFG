import React from 'react';
import '../styles/NaturalPark.css';


const Route = (props) => {

    return (
        <div>
            <article>
                <h3>
                    {props.name}
                    {props.gpxfile}
                </h3>
            </article>
        </div>
    )
}


export default NaturalParkComponent;