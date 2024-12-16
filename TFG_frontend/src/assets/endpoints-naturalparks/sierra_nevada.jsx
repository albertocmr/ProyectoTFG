import React from 'react';


const SierraNevada = () =>{

    return (
        <div className="container mt-4">

            <div className="p-4 shadow-sm bg-light rounded">
                <h1 className="display-5 text-center mb-4">Parque Natural de Sierra Nevada</h1>
                <p className="lead text-center">
                    Se encuentra en Granada
                </p>

                {/* Contenedor para las restricciones */}
                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h2 className="display-6 mb-3">Restricciones PORN.</h2>
                    <h3 className="h5 mb-4">Actividades de libre realización.</h3>

                    <p className="mb-3">
                        1. Quedan sujetas a la obtención de autorización conforme al procedimiento regulado en
                        este Plan, las siguientes actividades de uso público, turismo activo y ecoturismo:
                        <ul className="list-unstyled">
                            <li><i className="bi bi-check-circle"></i> La observación de la fauna y flora y la observación geoatmosférica.</li>
                            <li><i className="bi bi-check-circle"></i> Las actividades de filmación, grabación sonora y fotografía.</li>
                            <li><i className="bi bi-check-circle"></i> Cicloturismo.</li>
                            <li><i className="bi bi-check-circle"></i> Ruta ecuestre.</li>
                            <li><i className="bi bi-check-circle"></i> Senderismo.</li>
                            <li><i className="bi bi-check-circle"></i> Circulación con vehículos a motor.</li>
                            <li><i className="bi bi-check-circle"></i> Travesía de montaña.</li>
                        </ul>
                    </p>

                    <p className="mb-3">
                        2. En particular no se podrán realizar las siguientes actividades de uso público, turismo
                        activo y ecoturismo:
                        <ul className="list-unstyled">
                            <li><i className="bi bi-x-circle"></i> Cicloturismo campo a través y en senderos exclusivamente peatonales.</li>
                            <li><i className="bi bi-x-circle"></i> Heliesquí, heliexcursión, paracaidismo y vuelo con ultraligero.</li>
                            <li><i className="bi bi-x-circle"></i> Las actividades aeronáuticas con motor por debajo de los 1.000 metros.</li>
                            <li><i className="bi bi-x-circle"></i> Vuelo libre y globo aerostático en Zonas de Reserva.</li>
                            <li><i className="bi bi-x-circle"></i> Establecimiento de áreas de despegue y aterrizaje.</li>
                            <li><i className="bi bi-x-circle"></i> Las rutas ecuestres en senderos exclusivos para peatones.</li>
                            <li><i className="bi bi-x-circle"></i> Todoterreno a motor en lugares prohibidos como cortafuegos.</li>
                            <li><i className="bi bi-x-circle"></i> Cualquier práctica deportiva con vehículos terrestres a motor fuera de las vías habilitadas.</li>
                            <li><i className="bi bi-x-circle"></i> La instalación de vías ferratas.</li>
                            <li><i className="bi bi-x-circle"></i> La utilización del fuego fuera de las zonas habilitadas.</li>
                            <li><i className="bi bi-x-circle"></i> El estacionamiento de caravanas fuera de los lugares habilitados.</li>
                        </ul>
                    </p>

                    <p className="mb-3">
                        3. El Equipo de Gestión del Espacio Natural podrá autorizar eventos turísticos, deportivos o culturales excepcionales en el Parque Natural.
                    </p>

                    <p className="mb-3">
                        4. Además de lo dispuesto, se prohíbe en el Parque Nacional:
                        <ul className="list-unstyled">
                            <li><i className="bi bi-x-circle"></i> Los deportes de nieve, excepto lo especificado en el PRUG.</li>
                            <li><i className="bi bi-x-circle"></i> La circulación de vehículos a motor fuera de los caminos habilitados.</li>
                            <li><i className="bi bi-x-circle"></i> La circulación de motocicletas, cuatriciclos y vehículos similares fuera de vías habilitadas.</li>
                            <li><i className="bi bi-x-circle"></i> La introducción de perros sueltos, a excepción de perros de rescate o guía.</li>
                        </ul>
                    </p>

                    <p className="mb-3">
                        5. La persona titular de la Consejería competente podrá, mediante orden, limitar actividades que afecten a la conservación de los valores naturales.
                    </p>

                    <p className="mb-3">
                        Las actividades deberán ejercerse de manera que no conlleven repercusiones negativas sobre el medio natural.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default SierraNevada;