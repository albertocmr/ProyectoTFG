import React from 'react';

const HomeComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-7 rounded border border-black">
                    <h1 className="display-6"> 
                        ¡Bienvenido a parkTracker 
                        <small className="text-muted"> webSite!</small>
                    </h1>
                    <p>
                        En esta página web puedes consultar si la ruta que tienes pensado hacer incumple con las restricciones ambientales que contienen los parques naturales que atraviesa tu trayecto.
                        Para ello, puedes utilizar nuestros menús que aparecen en el desplegable. 
                    </p>
                </div>

                <div className="col-12 col-md-6 col-lg-5">
                    <img 
                        id="home-image" 
                        alt="IMAGEN DE PRUEBA" 
                        className="img-fluid rounded" 
                        src="https://twenergy.com/wp-content/uploads/2019/07/Parque_Nacional_Banff_Canada-1280x720.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
