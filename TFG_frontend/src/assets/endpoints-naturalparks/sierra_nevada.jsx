import React from 'react';

const SierraNevada = () => {
    return (
        <div className="container mt-4">
            <div className="p-4 shadow-sm bg-light rounded">
                <h1 className="display-5 text-center mb-4">Parque Natural de Sierra Nevada</h1>
                <p className="lead text-center">
                    El Parque Natural de Sierra Nevada se encuentra en la provincia de Granada, destacando por su diversidad biológica y paisajística única.
                </p>

                {/* Restricciones PORN */}
                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h2 className="display-6 mb-3">Restricciones</h2>
                    <h3 className="h5 mb-4">Plan de Ordenación de los Recursos Naturales (PORN)</h3>
                    <p className="mb-3"><strong>Actividades de libre realización:</strong></p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-check-circle"></i> Circulación con vehículos a motor en vías habilitadas.</li>
                        <li><i className="bi bi-check-circle"></i> Cicloturismo.</li>
                        <li><i className="bi bi-check-circle"></i> Senderismo.</li>
                        <li><i className="bi bi-check-circle"></i> Travesías de montaña.</li>
                        <li><i className="bi bi-check-circle"></i> Rutas ecuestres.</li>
                        <li><i className="bi bi-check-circle"></i> Observación de fauna, flora y fenómenos atmosféricos.</li>
                        <li><i className="bi bi-check-circle"></i> Filmación, grabación sonora y fotografía.</li>
                    </ul>
                    <p className="mb-3"><strong>Queda prohibido:</strong></p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-x-circle"></i> Cicloturismo campo a través o en senderos exclusivos para peatones.</li>
                        <li><i className="bi bi-x-circle"></i> Rutas ecuestres en senderos exclusivos para peatones.</li>
                        <li><i className="bi bi-x-circle"></i> Todoterrenos a motor fuera de las vías habilitadas.</li>
                        <li><i className="bi bi-x-circle"></i> Estacionamiento de caravanas fuera de lugares designados.</li>
                        <li><i className="bi bi-x-circle"></i> Utilización del fuego fuera de zonas habilitadas.</li>
                        <li><i className="bi bi-x-circle"></i> Actividades como heliesquí, vuelo con ultraligero y paracaidismo.</li>
                        <li><i className="bi bi-x-circle"></i> Deportes de nieve no especificados en el PRUG.</li>
                        <li><i className="bi bi-x-circle"></i> La instalación de vías ferratas.</li>
                        <li><i className="bi bi-x-circle"></i> Vuelo libre o globo aerostático en Zonas de Reserva.</li>
                        <li><i className="bi bi-x-circle"></i> Establecimiento de áreas de despegue y aterrizaje.</li>
                    </ul>
                    <p>
                        El Equipo de Gestión del Espacio Natural podrá autorizar eventos turísticos, deportivos o culturales excepcionales en el Parque Natural.
                    </p>
                </div>

                {/* Notas Adicionales */}
                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h3 className="h5 mb-4">Notas Adicionales</h3>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-x-circle"></i> Las actividades deberán ejercerse de manera que no conlleven repercusiones negativas sobre el medio natural.</li>
                        <li><i className="bi bi-x-circle"></i> Se prohíbe la circulación de motocicletas, cuatriciclos y vehículos similares fuera de vías habilitadas.</li>
                        <li><i className="bi bi-x-circle"></i> No se permite la introducción de perros sueltos, salvo excepciones como perros de rescate o guía.</li>
                    </ul>
                </div>

                <p className="mt-4">
                    La información de este artículo está basada en los Planes pertenecientes al Parque Natural Sierra Nevada:
                </p>
                <ul className="list-unstyled">
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/20558027/anexo_1.pdf/545aeafe-0458-c1e8-10ee-fc254d725014">Plan de Ordenación de los Recursos Naturales</a></li>
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/1542338/anexo_3_%20PRUG_parque_natural_sierra_nevada.pdf/a562333d-9ae3-075c-dafe-7d2e9e0b63c0">Plan Rector de Uso y Gestión</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SierraNevada;
