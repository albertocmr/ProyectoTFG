const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, de Turismo en el Medio Rural y Turismo Activo, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, por la que se establecen obligaciones y condiciones medioambientales para la práctica de las actividades integrantes del turismo activo, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión.",
  "Las Consejerías de Turismo, Comercio y Deporte y de Medio Ambiente podrán regular mediante Orden Conjunta, las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o de ecoturismo.",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas."
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos o inundados.",
    "La circulación de vehículos campo a través o fuera de los caminos permitidos de bicicletas y vehículos a motor.",
    "La circulación de quads vinculada a actividades de uso público.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada."
  ],
  bike: [
    "Bicicleta de montaña en Zonas de reserva (A).",
    "La circulación de vehículos campo a través o fuera de los caminos permitidos de bicicletas y vehículos a motor."
  ],
  hike: [
    "Travesía y montañismo en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).",
    "La puesta en valor de nuevos senderos peatonales y su señalización."
  ]
};

const additionalRules = [
  "Paracaidismo.",
  "Actividades aeronáuticas: globo aerostático.",
  "Escalada: en Zonas de reserva (A) y del 1 de diciembre al 31 de agosto, en zonas donde se produzca nidificación y cría de aves rapaces, periodo que podrá ser modificado si se realizan estudios posteriores que lo justifiquen.",
  "Espeleología.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "La apertura de nuevas vías de escalada en paredes y el reequipamiento y el desequipamiento de las existentes.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "La creación de áreas de acampada.",
  "La creación de nuevos campamentos de turismo.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor."
];

const prugActivities = [];

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

const SierraMariaLosVelezRestrictions = ({ selectedMethod }) => {
  const methodKey =
    selectedMethod === "1" ? "motor" :
    selectedMethod === "2" ? "bike" :
    selectedMethod === "3" ? "hike" : "all";

  const methodNames = {
    motor: "Vehículo a motor.",
    bike: "Bicicleta.",
    hike: "Senderismo.",
    all: "Todas las restricciones (vehículos a motor, ciclismo y senderismo)"
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
      <div className="card-container">
        <h3 className="mb-4">Restricciones del Parque Natural de Sierra María-Los Vélez</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraMariaLosVelezRestrictions;
