import React from 'react';

    const HomeComponent = () => {
        return (
            <div class='container'>
                <div class='row'>
                    <div class='col-sm-12 col-md-6 col-lg-7 rounded border border-black'>
                        <h1 class="display-6"> 
                            ¡Bienvenido a parkTracker 
                            <small class="text-muted"> webSite!</small>
                        </h1>
                        <p> En esta página web puedes consultar si la ruta que tienes pensado hacer incumple con las restricciones ambientales que contienen los parques naturales que atraviesa tu trayecto.
                            Para ello, puedes utilizar nuestros menús que aparecen en el desplegable. </p>
                    </div>
                    <div class='col-sm-12 col-md-6 col-lg-5'>
                        <img id='home-image' alt='IMAGEN DE PRUEBA' class='rounded' src='https://twenergy.com/wp-content/uploads/2019/07/Parque_Nacional_Banff_Canada-1280x720.jpg'></img>
                    </div>
                </div>

            </div>
        )

};

export default HomeComponent;
