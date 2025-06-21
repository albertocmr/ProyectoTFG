const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierra de Cardeña y Montoro.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos e inundados.",
    "La circulación campo a través o fuera de los caminos permitidos de bicicleta y vehículos a motor.",
    "La circulación en quads para actividades vinculadas al uso público en todo el Parque Natural.",
    "Circulación de vehículos a motor en Zonas de reserva (A)",
    "Circulación de caravanas con 4 o más vehículos.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada."
  ],
  bike: [
    "La circulación campo a través o fuera de los caminos permitidos de bicicleta y vehículos a motor.",
    "Bicicleta de montaña en Zonas de reserva (A)."
  ],
  hike: [
    "Senderismo: en Zonas de reserva (A).",
    "La puesta en valor de nuevos senderos peatonales y su señalización.",
    "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada."
  ]
};

const additionalRules = [
  "El descenso de cauces de agua con cualquier tipo de embarcación.",
  "El paracaidismo en todo el Parque Natural.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "Turismo ecuestre en Zonas de reserva (A).",
  "Actividades aeronáuticas: globo aerostático.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad."
];

const Sections = ({ title, items }) => (
  <section className="mb-4 mt-4 p-2">
    <h2 className="ms-4 mb-2"><u>{title}</u></h2>
    <ul className="list-group mb-4 border border-dark">
      {items.map((item, index) => (
        <li key={index} className={`list-group-item ${index % 2 === 0 ? "list-group-item-dark" : ""}`}>
          {item}
        </li>
      ))}
    </ul>
  </section>
);

const SierraCardeniaRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Sierra de Cardeña y Montoro</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas Generales" items={generalRules} />
        )}
        <Sections title="Restricciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};
  export default SierraCardeniaRestrictions;