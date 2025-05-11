const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del parque natural del Despeñaperros.",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de las nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos e inundados.",
    "La circulación campo a través o fuera de los caminos permitidos de vehículos a motor.",
    "La circulación en quads vinculada a actividades de uso público.",
    "La circulación de vehículos a motor en Zonas de reserva (A). (requiere autorización)",
    "Las caravanas con 4 o más vehículos. (requiere autorización)",
  ],
  bike: [
    "La circulación campo a través o fuera de los caminos permitidos de bicicleta.",
    "Bicicleta de montaña en Zonas de reserva (A). (requiere autorización)",
  ],
  hike: [
    "Senderismo: en Zonas de reserva (A). (requiere autorización)",
    "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir, la funda de vivac o tiendas de campaña de pequeña envergadura. (requiere autorización)",
    "Travesía, montañismo: en Zonas de reserva (A). (requiere autorización)",
    "Escalada: en Zonas de reserva (A) y, del 1 de diciembre al 31 de agosto, en zonas donde se produzca nidificación y crías de aves rapaces. (requiere autorización)",
  ],
};

const additionalRules = [
  "El paracaidismo.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "Actividades aeronáuticas: globo aerostático. (requiere autorización)",
  "Salto desde el puente y salto con elástico: en Zonas de reserva (A). (requiere autorización)",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales. (requiere autorización)",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada. (requiere autorización)",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía. (requiere autorización)",
  "La apertura de nuevas vías o escuelas de escalada y el reequipamiento y el desequipamiento de las existentes. (requiere autorización)",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor. (requiere autorización)",
  "La creación de camping y áreas de acampada. (requiere autorización)",
  "La puesta en valor de nuevos senderos peatonales y su señalización. (requiere autorización)",
];


const Sections = ({ title, items }) => (
  <section className="mb-4 mt-4 border border-dark p-2">
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

const DespeniaperrosRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural del Despeñaperros </h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default DespeniaperrosRestrictions;