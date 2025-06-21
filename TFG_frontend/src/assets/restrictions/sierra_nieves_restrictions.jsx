const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierras de las Nieves.",
  "La Consejería de Turismo, Comercio y Deporte y de Medio Ambiente podrán regular mediante Orden conjunta las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o ecoturismo.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const rulesByMethod = {
  motor: [
    "El cicloturismo campo a través y en los senderos que el Programa Sectorial de Uso Público establezca de uso exclusivamente peatonal.",
    "La circulación de vehículos a motor campo a través, en cortafuegos y fajas auxiliares, en vías forestales de extracción de madera, en cauces secos o inundados, en servidumbres del dominio público hidráulico, caminos de anchura inferior a 2 metros y en senderos, salvo en aquellos tramos de los mismos en los que el uso de vehículos a motor esté expresamente permitido por la persona titular de la Delegación Territorial de Jaén de la Consejería competente en materia de medio ambiente.",
    "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motocicletas, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
    "El estacionamiento para pernoctar de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
  
  ],
  bike: [
    "El cicloturismo campo a través y en los senderos que el Programa Sectorial de Uso Público establezca de uso exclusivamente peatonal.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
  
  ],
  hike: [
    "Las rutas ecuestres en los senderos que el Programa Sectorial de Uso Público establezca de uso exclusivamente peatonal.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "El senderismo y la travesía de montaña en Zonas de Reserva (A), realizados en época de elevado riesgo de incendios (del 1 de junio al 15 de octubre) y horario nocturno (de 22:00 a 5:00 horas), por grupos constituidos por más de 15 personas.",
    "El vivaqueo y la acampada nocturna vinculados a actividades de travesía de montaña para grupos superiores a 15 personas o que utilicen más de 3 tiendas de campaña.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
  
  ],
};

const additionalRules = [
  
  "La heliexcursión, el paracaidismo y el vuelo con ultraligero y en general las actividades recreativas que empleen aeronaves con motor.",
  "La apertura, reequipamiento o desequipamiento de vías de escalada, incluyendo vías ferrata.",
  "La celebración de romerías y fiestas populares, así como la celebración de pruebas o eventos deportivos y las concentraciones y actividades recreativas, tal como las define el Decreto 195/2007, de 26 de junio, por el que se establecen las condiciones generales para la celebración de espectáculos públicos y actividades recreativas de carácter ocasional y extraordinario, con menos de diez años de antigüedad y aquellas de más de diez años de antigüedad cuando se produzcan modificaciones de las condiciones establecidas en la última autorización otorgada por la persona titular de la correspondiente Delegación Territorial de la Consejería competente en materia de medio ambiente.",
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

const SierraNievesRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Sierra de las Nieves</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraNievesRestrictions;
