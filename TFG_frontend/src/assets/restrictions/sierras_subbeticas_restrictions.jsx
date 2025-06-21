const generalRules = [
  "El desarrollo de las actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y Medio Ambiente y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas."
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos terrestres a motor por caminos rurales de uso restringido, por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos o inundados.",
    "La circulación de vehículos campo a través.",
    "Las bicicletas de montaña, turismo ecuestre y vehículos terrestres a motor en los senderos peatonales de uso público clasificados como tal por la Consejería de Medio Ambiente.",
    "La circulación de quads vinculada a actividades de uso público.",
    "Las caravanas con 4 o más vehículos.",
    "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada."
  ],
  bike: [
    "Las bicicletas de montaña, turismo ecuestre y vehículos terrestres a motor en los senderos peatonales de uso público clasificados como tal por la Consejería de Medio Ambiente.",
    "Bicicleta de montaña en Zonas de reserva (A).",
    "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
    "La puesta en valor de nuevos senderos peatonales y su señalización.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada."
  ],
  hike: [
    "Senderismo en Zonas de Reserva (A).",
    "Turismo ecuestre en Zonas de Reserva (A).",
    "Las bicicletas de montaña, turismo ecuestre y vehículos terrestres a motor en los senderos peatonales de uso público clasificados como tal por la Consejería de Medio Ambiente.",
    "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
    "La puesta en valor de nuevos senderos peatonales y su señalización.",
    "El tránsito, para la realización de actividades de educación ambiental, por caminos de acceso restringido por motivos de conservación.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada."
  ]
};

const additionalRules = [
  "El paracaidismo.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "Actividades aeronáuticas: globo aerostático.",
  "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir o la funda de vivac.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad."
];


const methodNames = {
  motor: "Vehículo a motor.",
  bike: "Bicicleta.",
  hike: "Senderismo.",
  all: "Todas las restricciones (vehículos a motor, ciclismo y senderismo)"
};

const Sections = ({ title, items }) => (
  <section className="mb-4 mt-4 p-2">
    <h2 className="ms-4">{title}</h2>
    <ul className="list-group mb-4 border border-dark">
      {items.map((item, index) => (
        <li key={index} className={`list-group-item ${index % 2 === 0 ? "list-group-item-dark" : ""}`}>
          {item}
        </li>
      ))}
    </ul>
  </section>
);


const SierrasSubbeticasRestrictions = ({ selectedMethod }) => {
  const methodKey =
    selectedMethod === "1" ? "motor" :
    selectedMethod === "2" ? "bike" :
    selectedMethod === "3" ? "hike" :
    "all";

  const combinedRules = methodKey === "all"
    ? Array.from(new Set([
        ...rulesByMethod.motor,
        ...rulesByMethod.bike,
        ...rulesByMethod.hike,
        ...additionalRules
      ]))
    : rulesByMethod[methodKey] || [];

  return (
    <div className="container shadow p-3">
      <div className="card-container">
        <h3 className="mb-4">Restricciones del Parque Natural Sierras Subbéticas</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas Generales" items={generalRules} />
        )}
        <Sections title="Prohibiciones en el parque natural" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierrasSubbeticasRestrictions;