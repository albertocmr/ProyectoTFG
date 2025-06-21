const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierras de Tejeda, Almijara y Alhama.",
  "La Consejería de Turismo, Comercio y Deporte y de Medio Ambiente podrán regular mediante Orden conjunta las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o ecoturismo.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const rulesByMethod = {
  motor: [
    "La circulación con vehículos a motor será de libre realización cuando se realice en equipamientos públicos, caminos, pistas forestales u otros espacios donde no exista limitación de acceso o de uso, que se establecerán mediante Orden de la persona titular de la Consejería competente en materia de medio ambiente.",
    "La circulación de vehículos a motor campo a través, en cortafuegos y fajas auxiliares, en vías forestales de extracción de madera, en cauces secos o inundados, en servidumbres del dominio público hidráulico, caminos de anchura inferior a 2 metros y en senderos, salvo en aquellos tramos de los mismos en los que el uso de vehículos a motor esté expresamente permitido por la persona titular de la Delegación Territorial de Jaén de la Consejería competente en materia de medio ambiente.",
    "La circulación de motocicletas, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
    "El estacionamiento para pernoctar de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "En zonas de Reserva A, será incompatible la circulación de vehículos a motor, salvo los ligados a la gestión del espacio, a las actividades de investigación, el uso público, el turismo activo y ecoturismo y a los aprovechamientos forestales, ganaderos y cinegéticos."

  ],
  bike: [
    "El cicloturismo campo a través y en los senderos de uso exclusivamente peatonal.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",

  ],
  hike: [
    "Las rutas ecuestres en senderos de uso público establezca exclusivamente peatonal.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "El senderismo y la travesía de montaña en Zonas de Reserva (A), realizados en época de elevado riesgo de incendios (del 1 de junio al 15 de octubre) y horario nocturno (de 22:00 a 5:00 horas), por grupos constituidos por más de 15 personas.",
    "El vivaqueo y la acampada nocturna vinculados a actividades de travesía de montaña para grupos superiores a 15 personas o que utilicen más de 3 tiendas de campaña.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
  ]
};

const additionalRules = [
  "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
]

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

const SierraTejedaRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Sierras de Tejeda, Almijara y Alhama</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas Generales" items={generalRules} />
        )}
        <Sections title="Prohibiciones en el parque natural" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraTejedaRestrictions;
