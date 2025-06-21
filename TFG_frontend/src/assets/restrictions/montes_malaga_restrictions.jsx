const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente.",
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos terrestres a motor por caminos rurales de uso restringido, por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos o inundados.",
    "La circulación campo a través o fuera de los caminos permitidos de vehículos a motor.",
    "La circulación de quads en actividades vinculadas al uso público en todo el Parque Natural.",
    "Las caravanas de 4 o de más vehículos terrestres a motor.",
  ],
  bike: [
    "La circulación campo a través o fuera de los caminos permitidos de bicicletas.",
    "Las bicicletas de montaña en los senderos peatonales de uso público clasificados como tal por la Consejería de Medio Ambiente.",
  ],
  hike: [
    "La acampada libre.",
    "El tránsito, para la realización de actividades de educación ambiental, por caminos de acceso restringido por motivos de conservación.",
    "La puesta en valor de nuevos senderos peatonales y su señalización.",
  ],
};

const additionalRules = [
  "El paracaidismo.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones y avionetas y cualquier vehículo aéreo con motor, incluyendo el vuelo con ultraligero.",
  "Actividades aeronáuticas con globo aerostático.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "El establecimiento de áreas de despegue o aterrizaje para actividades aeronáuticas sin motor, así como la señalización de las mismas.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
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

const MontesMalagaRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Montes de Málaga</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default MontesMalagaRestrictions;
