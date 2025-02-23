import React from 'react';

const SierraCastril = () => {
    return (
        <div className="container mt-4">
            <div className="p-4 shadow-sm bg-light rounded">
                <h1 className="display-5 text-center mb-4">Parque Natural de la Sierra de Castril</h1>
                <p className="lead text-center">
                    El Parque Natural de la Sierra de Castril se encuentra en la provincia de Granada, destacando por su diversidad biológica y paisajística única.
                </p>

                {/* Restricciones PORN */}
                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h2 className="display-6 mb-3">Restricciones</h2>
                    <p>El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por 
                        parte de empresas se regirá por la normativa v igente, en particular por lo establecido en el 
                        Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las 
                        Consejerías de Turismo y Deporte y de Medio Ambiente, por la que se establecen 
                        obligaciones y condiciones medioambientales para la práctica de las actividades integrantes 
                        del turismo activo, así como por las determinaciones del presente plan y del Plan Rector de 
                        Uso y Gestión.</p>

                    
                </div>
            </div>

        </div>
    );

}

export default SierraCastril;