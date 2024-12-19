import React from 'react';

const SierraHuetor = () => {
    return (
        <div className="container mt-4">
            <div className="p-4 shadow-sm bg-light rounded">
                <h1 className="display-5 text-center mb-4">Parque Natural Sierra de Huétor</h1>
                <p className="lead text-center">
                    El parque natural Sierra de Huétor está situado en la provincia de Granada, fue declarado Parque Natural por la Ley 2/1989, de 18 julio.
                </p>

                {/* Restricciones PORN */}
                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h2 className="display-6 mb-3">Restricciones</h2>
                    <h3 className="h5 mb-4">Plan de Ordenación de los Recursos Naturales (PORN). Vigencia indefinida.</h3>
                    <p className="mb-3"><strong>Requerirán autorización previa de la Consejería de Medio Ambiente las siguientes actividades:</strong></p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-check-circle"></i> Cualquier actividad que se realice en las Zonas de Reserva (A).</li>
                        <li><i className="bi bi-check-circle"></i> Actividades fuera de los equipamientos básicos que requieran instalaciones.</li>
                        <li><i className="bi bi-check-circle"></i> Competiciones deportivas, pruebas o exhibiciones organizadas.</li>
                        <li><i className="bi bi-check-circle"></i> Apertura de nuevas vías o escuelas de escalada en paredes de roca.</li>
                        <li><i className="bi bi-check-circle"></i> Escalada en zonas de nidificación de aves rapaces (1 de diciembre a 31 de agosto).</li>
                        <li><i className="bi bi-check-circle"></i> Caravanas organizadas de 4 o más vehículos a motor.</li>
                        <li><i className="bi bi-check-circle"></i> Instalación de infraestructuras y equipamientos permanentes para el uso público.</li>
                    </ul>
                    <p><strong>Queda prohibido</strong>, para el desarrollo de actividades de uso público:</p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-x-circle"></i> La circulación de vehículos terrestres a motor por caminos de menos de 2 metros de ancho.</li>
                        <li><i className="bi bi-x-circle"></i> La circulación campo a través de bicicletas y vehículos a motor.</li>
                        <li><i className="bi bi-x-circle"></i> La circulación de quads vinculada a actividades de turismo activo.</li>
                    </ul>
                    <p>
                        La Consejería de Medio Ambiente podrá regular mediante Orden las condiciones medioambientales para nuevas actividades deportivas, turismo activo o ecoturismo.
                    </p>
                </div>

                {/* Restricciones PRUG */}
                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h3 className="h5 mb-4">Restricciones - Plan Rector de Uso y Gestión (PRUG)</h3>
                    <p className="mb-3">
                        Vigencia de 8 años, prorrogable por otros 8 años, mediante Orden del titular de la Consejería de Medio Ambiente.
                    </p>
                    <p><strong>Vehículos terrestres a motor:</strong></p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-check-circle"></i> Velocidad máxima de 40 km/h en caminos autorizados.</li>
                        <li><i className="bi bi-check-circle"></i> No se permite salir de los caminos designados.</li>
                        <li><i className="bi bi-check-circle"></i> Normas durante la observación de fauna:
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle"></i> Evitar ruidos o sonidos perturbadores.</li>
                                <li><i className="bi bi-check-circle"></i> No arrojar alimentos ni realizar cebados.</li>
                                <li><i className="bi bi-check-circle"></i> No interceptar el movimiento de animales.</li>
                                <li><i className="bi bi-check-circle"></i> Velocidad máxima de 20 km/h cerca de la fauna.</li>
                                <li><i className="bi bi-check-circle"></i> No usar iluminación artificial.</li>
                                <li><i className="bi bi-check-circle"></i> No usar sistemas de atracción, captura o repulsión de animales.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <p className="mt-4">
                    La información de este artículo está basada en los Planes pertenecientes al Parque Natural Sierra de Huétor:
                </p>
                <ul className="list-unstyled">
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/2109762/anexo1huetor.pdf/9b9a44c2-9db0-a64a-111a-901117b51e64">Plan de Ordenación de los Recursos Naturales</a></li>
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/751866/anexo2huetor.pdf/f13f545d-a0e6-1fdb-c9e5-f78098e0e42c">Plan Rector de Uso y Gestión</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SierraHuetor;
