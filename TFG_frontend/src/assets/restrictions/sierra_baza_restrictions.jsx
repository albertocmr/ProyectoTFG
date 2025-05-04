import React from 'react';

const rulesByMethod = {
  motor: [
    "Los vehículos no podrán salirse de los caminos permitidos, excepto en los lugares previstos para ello.",
    "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos e inundados.",
    "En caminos de tierra, la velocidad máxima será de 40 km/h salvo indicación expresa que establezca un límite diferente.",
    "No se circulará a más de 20 km/h en las inmediaciones de los animales.",
    "No se producirán ruidos o sonidos estridentes que puedan perturbar la fauna.",
    "No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.",
    "No se interceptará la trayectoria de movimiento de los grupos de animales.",
    "No se utilizará iluminación artificial alguna.",
    "No se utilizará ningún sistema de atracción, captura o repulsión de animales.",
    "La circulación de quads vinculada a actividades de uso público o turismo activo.",
    "Caravanas organizadas de 4 o más vehículos a motor.",
  ],
  bike: [
    "La circulación campo a través o fuera de los caminos permitidos de bicicleta.",
    "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
    "No se circulará a más de 20 km/h en las inmediaciones de los animales.",
    "No se producirán ruidos o sonidos estridentes que puedan perturbar la fauna.",
    "No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.",
    "No se interceptará la trayectoria de movimiento de los grupos de animales.",
    "No se utilizará iluminación artificial alguna.",
    "No se utilizará ningún sistema de atracción, captura o repulsión de animales.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  ],
  hike: [
    "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
    "La apertura de nuevas vías o escuelas de escalada en paredes y el equipamiento o el desequipamiento de las existentes.",
    "El vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para ello (saco de dormir, funda de vivac o tiendas de campaña de pequeño tamaño).",
    ]
};

const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren."
];

const additionalRules = [
  "Las actividades recreativas, o relacionadas con ellas, que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor",
  "El paracaidismo.",
  "El descenso de cursos de agua en cualquier tipo de embarcación.",
  "Escalada, del 1 de diciembre al 31 de agosto, en zonas donde se produzca nidificación y cría de aves rapaces.",
  "Las actividades aeronáuticas siguietes: parapente, ala delta, vuelo sin motor y globo aerostático.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales",
  "El establecimento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "La instalación de infraestructuras y equipamientos permanentes para el uso público, el turismo o la educación ambiental.",
  "Aquellas romerías o concentraciones de carácter popular que hayan comenzado a tener lugar durante los últimos 10 años o se vayan a iniciar en el futuro."

]

const Sections = ({ title, items }) => (
  <section className="mb-4 mt-4 border border-dark p-2">
    <h4 className="ms-4 mb-2"><u>{title}</u></h4>
    <ul className="list-group mb-4 border border-dark">
      {items.map((item, index) => (
        <li key={index} className={`list-group-item ${index % 2 === 0 ? "list-group-item-dark" : ""}`}>
          {item}
        </li>
      ))}
    </ul>
  </section>
);

const SierraBazaRestrictions = ({ selectedMethod }) => {
  const methodKey = String(selectedMethod) === "1"
    ? "motor"
    : String(selectedMethod) === "2"
    ? "bike"
    : String(selectedMethod) === "3"
    ? "hike"
    : "all";

  const methodNames = {
    motor: "Vehículo a motor",
    bike: "Bicicleta",
    hike: "Senderismo",
    all: "Todas las restricciones (vehículos a motor, ciclismo y senderismo)",
  };

  const combinedRules =
    methodKey === "all"
      ? Array.from(new Set([
          ...rulesByMethod.motor,
          ...rulesByMethod.bike,
          ...rulesByMethod.hike,
          ...additionalRules
        ]))
      : rulesByMethod[methodKey] || [];

  return (
    <div className="container shadow p-3">
      <div className='card-container'>
        <h3 className="mb-4">Restricciones del parque natural de Sierra de Baza</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas Generales de los planes PORN y PRUG." items={generalRules} />
        )}
        <Sections title="Prohibiciones del parque natural Sierra de Baza." items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraBazaRestrictions;
