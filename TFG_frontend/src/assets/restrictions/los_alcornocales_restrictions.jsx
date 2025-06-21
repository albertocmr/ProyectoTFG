const generalRules = [
  "Excepcionalmente, el órgano competente de la Consejería competente en materia de medio ambiente podrá autorizar eventos deportivos, turísticos o culturales relacionados con las actividades no permitidas, salvo en la heliexcursión, el paracaidismo y el vuelo con ultraligero y en general las actividades recreativas que empleen aeronaves con moto, que no se podrán autorizar cuando pretendan desarrollarse en zonas de reserva A."
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos a motor “campo a través”, en cortafuegos y fajas auxiliares, en vías forestales de extracción de madera, en cauces secos o inundados, en servidumbres de los dominios públicos hidráulicos y marítimo terrestre, caminos de anchura inferior a 2 metros y en senderos, salvo en aquellos tramos de los mismos en los que el uso de vehículos a motor esté expresamente permitido por la persona titular de la correspondiente Delegación Territorial de la Consejería competente en materia de medio ambiente.",
    "La circulación de motocicletas, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "El estacionamiento para pernoctar de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
    "Las actividades de filmación, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
  
  ],
  bike: [
    "El cicloturismo campo a través y en senderos de uso exclusivamente peatonal.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "Las actividades de filmación, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
  
  ],
  hike: [
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "El vivaqueo y la acampada nocturna vinculados a travesía de montaña para grupos superiores a 15 personas o que utilicen más de 3 tiendas de campaña.",
    "Las actividades de filmación, grabación sonora y fotografía que impliquen el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros.",
  
  ],
};

const additionalRules = [
  "La heliexcursión, el paracaidismo y el vuelo con ultraligero y en general las actividades recreativas que empleen aeronaves con motor.",
  "Las rutas ecuestres en senderos de uso público exclusivamente peatonales.",
  "El descenso de barrancos en canutos y en cauces de agua cuando dicha práctica suponga una amenaza para la conservación.",
  "Las romerías, fiestas populares, pruebas o eventos deportivos, las concentraciones y las actividades recreativas tal como las define el Decreto 195/2007, de 26 de junio.",


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

const LosAlcornocalesRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural los Alcornocales</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default LosAlcornocalesRestrictions;