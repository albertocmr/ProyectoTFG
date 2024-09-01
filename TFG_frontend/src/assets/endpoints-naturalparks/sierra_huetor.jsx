import React from 'react';

const SierraHuetor = () => { 
    return (
        <div className="container mt-4">
            <div className="p-4 shadow-sm bg-light rounded">
                <h1 className="display-5 text-center mb-4">Parque Natural Sierra de Huétor</h1>
                <p className="lead">
                    El parque natural Sierra de Huétor está situado en la provincia de Granada, fue declarado Parque Natural por la Ley 2/1989, de 18 julio.
                </p>

                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h2 className="display-6">Restricciones</h2>
                    <h3 className="h5">Plan de Ordenación de los Recursos Naturales (PORN). Vigencia indefinida.</h3>
                    <p className="mb-3">Artículo 5.3.5 NORMAS GENERALES - USO PÚBLICO, TURISMO RURAL Y ACTIVO.</p>
                    <p><strong>Requerirán autorización previa de la Consejería de Medio Ambiente las siguientes actividades:</strong></p>
                    <ul>
                        <li>Cualquier actividad que se realice en las Zonas de Reserva (A).</li>
                        <li>Cualquier actividad permitida fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.</li>
                        <li>La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.</li>
                        <li>La apertura de nuevas vías o escuelas de escalada en paredes de roca, y el equipamiento o el desequipamiento de las existentes.</li>
                        <li>La escalada del 1 de diciembre al 31 de agosto en zonas donde nidifiquen y críen aves rapaces.</li>
                        <li>Caravanas organizadas de 4 o más vehículos a motor.</li>
                        <li>La instalación de infraestructuras y equipamientos permanentes para el uso público, el turismo o la educación ambiental.</li>
                    </ul>
                    <p><strong>Queda prohibido</strong>, para el desarrollo de actividades de uso público:</p>
                    <ul>
                        <li>La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, por las zonas de servidumbre del dominio público hidráulico, por cortafuegos y fajas auxiliares, por vías de saca forestales y por cauces secos o inundados.</li>
                        <li>La circulación campo a través o fuera de los caminos permitidos de bicicletas y vehículos a motor.</li>
                        <li>La circulación de quads vinculada a actividades de uso público o turismo activo.</li>
                    </ul>
                    <p>
                        La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte 
                        las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o ecoturismo que se declaren.
                    </p>
                </div>

                <div className="p-4 mb-4 shadow-sm bg-white rounded">
                    <h2 className="display-6">Restricciones</h2>
                    <h3 className="h5">Plan Rector de Uso y Gestión (PRUG).</h3>
                    <p className="mb-3">
                        Vigencia de 8 años, susceptible de ser prorrogado por un plazo no superior a otros 8 años, mediante Orden del titular de la Consejería de Medio Ambiente.
                        Artículo 5.3.5 NORMAS GENERALES - USO PÚBLICO, TURISMO RURAL Y ACTIVO.
                    </p>
                    <h4 className="h6">4.2 NORMAS RELATIVAS A USOS Y ACTIVIDADES</h4>
                    <h5 className="h6">4.2.5 USO PÚBLICO, TURISMO EN EL MEDIO RURAL Y TURISMO ACTIVO</h5>
                    <p><strong>Vehículos terrestres a motor:</strong></p>
                    <ul>
                        <li>En caminos de tierra, la velocidad máxima será de 40 km/h, salvo indicación expresa que establezca un límite diferente.</li>
                        <li>Los vehículos no podrán salir de los caminos, excepto en los lugares previstos para ello.</li>
                        <li>Cuando se empleen vehículos todoterreno para la observación de la fauna, se seguirán las siguientes normas:
                            <ul>
                                <li>No se producirán ruidos o sonidos que puedan perturbar a la fauna.</li>
                                <li>No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.</li>
                                <li>No se interceptará el movimiento de los grupos de animales.</li>
                                <li>No se circulará a más de 20 km/h en las inmediaciones de los animales.</li>
                                <li>No se utilizará iluminación artificial alguna.</li>
                                <li>No se utilizarán sistemas de atracción, captura o repulsión de animales.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <p>
                    La información de este artículo se encuentra en los Planes pertenecientes al Parque Natural Sierra de Huétor:
                </p>
                <ul>
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/2109762/anexo1huetor.pdf/9b9a44c2-9db0-a64a-111a-901117b51e64">Plan de Ordenación de los Recursos Naturales</a></li>
                    <li><a className="link-opacity-75-hover" href="https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/751866/anexo2huetor.pdf/f13f545d-a0e6-1fdb-c9e5-f78098e0e42c">Plan de Rector de Uso y Gestión</a></li>
                </ul> 
            </div>
        </div>
    );
}

export default SierraHuetor;
