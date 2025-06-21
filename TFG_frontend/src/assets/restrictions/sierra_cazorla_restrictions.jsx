const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierras de Cazorla, Segura y Las Villas.",
  "La Consejería de Turismo, Comercio y Deporte y de Medio Ambiente podrán regular mediante Orden conjunta las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o ecoturismo.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos a motor campo a través, en cortafuegos y fajas auxiliares, en vías forestales de extracción de madera, en cauces secos o inundados, en servidumbres del dominio público hidráulico, caminos de anchura inferior a 2 metros y en senderos, salvo en aquellos tramos de los mismos en los que el uso de vehículos a motor esté expresamente permitido por la persona titular de la Delegación Territorial de Jaén de la Consejería competente en materia de medio ambiente.",
    "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motocicletas, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
    "El estacionamiento para pernoctar de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares como focos, pantallas reflectoras, generadores eléctricos u otros. (requiere autorización)",
    "Circulación con vehículos a motor por caminos o espacios donde el acceso o uso esté limitado. (requiere autorización)",
  ],
  bike: [
    "El cicloturismo campo a través y en los senderos que el Programa Sectorial de Uso Público establezca de uso exclusivamente peatonal.",
    "Cicloturismo cuando se practique en zonas donde exista limitación de acceso o uso. (requiere autorización)",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares como focos, pantallas reflectoras, generadores eléctricos u otros. (requiere autorización)",
  ],
  hike: [
    "Las rutas ecuestres en los senderos que el Programa Sectorial de Uso Público establezca de uso exclusivamente peatonal.",
    "Travesía de montaña por espacios por zonas de Reserva. (requiere autorización)",
    "Senderismo cuando se realice por zonas con limitación de uso o acceso. (requiere autorización)",
    "Alpinismo en zonas con limitaciones de acceso o uso. (requiere autorización)",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares como focos, pantallas reflectoras, generadores eléctricos u otros. (requiere autorización)",
  ],
};

const additionalRules = [
  "La heliexcursión, el paracaidismo y el vuelo con ultraligero y en general las actividades recreativas que empleen aeronaves con motor.",
  "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
  "La navegación con motor de explosión.",
  "La observación de la fauna, flora, patrimonio geológico y fenómenos geoatmosféricos cuando se realice en espacios donde exista limitación de acceso o de uso. (requiere autorización)",
  "Actividades de filmación, rodaje, grabación sonora y fotografía, incluso sin equipos auxiliares, si se realizan en zonas con acceso o uso limitado. (requiere autorización)",
  "Escalada clásica en espacios restringidos. (requiere autorización)",
  "Navegación a vela, a remo y con motor eléctrico en zonas con acceso o uso limitado. (requiere autorización)",
  "Piragüismo en espacios con restricciones de uso. (requiere autorización)",
  "Uso de hidropedales en zonas con acceso o uso restringido. (requiere autorización)",
  "Descenso de barrancos fuera de los lugares, fechas o condiciones previamente determinadas o en zonas restringidas. (requiere autorización)",
  "Descenso en bote fuera de los lugares y condiciones previamente establecidos. (requiere autorización)",
  "Escalada deportiva fuera de zonas habilitadas o en fechas no autorizadas. (requiere autorización)",
  "Espeleología fuera de las zonas, fechas o condiciones reguladas. (requiere autorización)",
  "Vuelo con globo aerostático fuera de los espacios o fechas autorizadas. (requiere autorización)",
  "Vuelo libre (parapente, ala delta, etc. (requiere autorización)) fuera de zonas y condiciones permitidas. (requiere autorización)",
  "Vuelo sin motor (velero) fuera de los espacios y fechas autorizadas. (requiere autorización)",
  "Actividades de paint-ball fuera de zonas específicamente autorizadas. (requiere autorización)",
  "El vivaqueo y la acampada nocturna vinculados a actividades de travesía de montaña para grupos superiores a 15 personas o que utilicen más de 3 tiendas de campaña. (requiere autorización)",
  "La celebración de romerías y fiestas populares. (requiere autorización)",
  "La celebración de pruebas o eventos deportivos. (requiere autorización)",
  "La celebración de concentraciones y actividades recreativas de carácter ocasional o extraordinario con menos de diez años de antigüedad. (requiere autorización)",
  "La celebración de concentraciones y actividades recreativas de más de diez años de antigüedad cuando se modifiquen las condiciones establecidas en la última autorización otorgada por la Delegación Territorial competente. (requiere autorización)"
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

const SierraCazorlaRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Sierra de Cazorla, Segura y Las Villas</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraCazorlaRestrictions;