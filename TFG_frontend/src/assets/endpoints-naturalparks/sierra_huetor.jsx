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
                        <li><i className="bi bi-check-circle"></i> Cualquier actividad fuera de los equipamientos básicos y complementarios que requiera instalación de dotaciones.</li>
                        <li><i className="bi bi-check-circle"></i> La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.</li>
                        <li><i className="bi bi-check-circle"></i> La apertura de nuevas vías o escuelas de escalada en paredes de roca.</li>
                        <li><i className="bi bi-check-circle"></i> La escalada en zonas de nidificación de aves rapaces (1 de diciembre a 31 de agosto).</li>
                        <li><i className="bi bi-check-circle"></i> Caravanas organizadas de 4 o más vehículos a motor.</li>
                        <li><i className="bi bi-check-circle"></i> La instalación de infraestructuras y equipamientos permanentes para el uso público.</li>
                    </ul>
                    <p><strong>Queda prohibido</strong>, para el desarrollo de actividades de uso público:</p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-x-circle"></i> La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros.</li>
                        <li><i className="bi bi-x-circle"></i> La circulación campo a través de bicicletas y vehículos a motor.</li>
                        <li><i className="bi bi-x-circle"></i> La circulación de quads vinculada a actividades de uso público o turismo activo.</li>
                    </ul>
                    <p>
                        La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de nuevas actividades deportivas, turismo activo o ecoturismo.
                    </p>
                </div>

                {/* Restricciones PRUG */}
                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h2 className="display-6 mb-3">Restricciones</h2>
                    <h3 className="h5 mb-4">Plan Rector de Uso y Gestión (PRUG).</h3>
                    <p className="mb-3">
                        Vigencia de 8 años, susceptible de ser prorrogado por un plazo no superior a otros 8 años, mediante Orden del titular de la Consejería de Medio Ambiente.
                        Artículo 5.3.5 NORMAS GENERALES - USO PÚBLICO, TURISMO RURAL Y ACTIVO.
                    </p>
                    <h4 className="h6">4.2 NORMAS RELATIVAS A USOS Y ACTIVIDADES</h4>
                    <h5 className="h6">4.2.5 USO PÚBLICO, TURISMO EN EL MEDIO RURAL Y TURISMO ACTIVO</h5>
                    <p><strong>Vehículos terrestres a motor:</strong></p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-check-circle"></i> En caminos de tierra, la velocidad máxima será de 40 km/h, salvo indicación expresa que establezca un límite diferente.</li>
                        <li><i className="bi bi-check-circle"></i> Los vehículos no podrán salir de los caminos, excepto en los lugares previstos para ello.</li>
                        <li><i className="bi bi-check-circle"></i> Cuando se empleen vehículos todoterreno para la observación de la fauna, se seguirán las siguientes normas:
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle"></i> No se producirán ruidos o sonidos que puedan perturbar a la fauna.</li>
                                <li><i className="bi bi-check-circle"></i> No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.</li>
                                <li><i className="bi bi-check-circle"></i> No se interceptará el movimiento de los grupos de animales.</li>
                                <li><i className="bi bi-check-circle"></i> No se circulará a más de 20 km/h en las inmediaciones de los animales.</li>
                                <li><i className="bi bi-check-circle"></i> No se utilizará iluminación artificial alguna.</li>
                                <li><i className="bi bi-check-circle"></i> No se utilizarán sistemas de atracción, captura o repulsión de animales.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <p className="mt-4">
                    La información de este artículo se encuentra en los Planes pertenecientes al Parque Natural Sierra de Huétor:
                </p>
                <ul className="list-unstyled">
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/2109762/anexo1huetor.pdf/9b9a44c2-9db0-a64a-111a-901117b51e64">Plan de Ordenación de los Recursos Naturales</a></li>
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/751866/anexo2huetor.pdf/f13f545d-a0e6-1fdb-c9e5-f78098e0e42c">Plan de Rector de Uso y Gestión</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SierraHuetor;
