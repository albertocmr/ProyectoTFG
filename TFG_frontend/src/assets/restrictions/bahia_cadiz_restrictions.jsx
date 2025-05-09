const generalRules = [
  "Las presentes normas generales serán de aplicación al Parque Nacional y sus zonas de reserva (A), regulación especial (B) y regulación común (C), sin perjuicio de lo dispuesto en su normativa particular",
  "Cabe destacar que la persona titular de la Delegación Territorial de Cádiz de la Consejería competente en materia de medio ambiente, podrá, mediante Resolución limitar el acceso y uso de los equipamientos básicos o el acceso a cualquier camino o zona terrestre o marina, establecer cupos o limitas fechar y horarios para el desarrollo de cualquier actividad, por alguna de las siguientes causas.",
  "Excepcionalmente, la Consejería competente en materia de medio ambiente, mediante Resolución de la persona titular de la Delegación Territorial de Cádiz de la Consejería competente en materia de medio ambiente, podrá autorizar eventos deportivos, turísticos o culturales relacionados con las actividades citadas en dicho apartado.",
  "El Equipo de Gestión del Espacio Natural podrá autorizar excepciones para eventos turísticos o culturales relacionados con las actividades mencionadas.",
  "Las limitaciones se establecerán mediante resolución del Director del Parque Nacional y podrán modificarse si afectan la conservación del entorno.",
];

const rulesByMethod = {
  motor: [
    "Actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motos de trial/enduro, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
    "La realización de cualquier actividad de uso público, turismo activo o ecoturismo en Zona A2 fuera de los equipamientos que se habiliten para ello.",
    "Actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de vehículos a motor por caminos de acceso restringido (requiere autorización",
    "Actividades de uso público, turismo activo y ecoturismo que impliquen la circulación en grupo de 4 ó más vehículos a motor (requiere autorización",
    "Observación de fauna y flora (requiere autorización).",
    "Actividades de filmación y fotografía (requiere autorización).",
  ],
  bike: [
    "Observación de fauna y flora (requiere autorización).",
    "Actividades de filmación y fotografía (requiere autorización).",
  ],
  hike: [
    "Travesía de montaña y senderismo (requiere autorización).",
    "Observación de fauna y flora (requiere autorización).",
    "Actividades de filmación y fotografía (requiere autorización).",
  ],
};

const additionalRules = [
  "Rutas ecuestres (requiere autorización).",
  "La acampada y la pernocta (aparcar entre el ocaso y la salida del sol) de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
  "La realización de cualquier actividad de uso público, turismo activo o ecoturismo en Zona A1, salvo actividades vinculadas a la observación de la fauna y la flora, el patrimonio geológico y la observación geoatmosférica.",
  "La navegación recreativa a motor en Zona B2 salvo la asociada a la pesca recreativa y a rutas turísticas de carácter educativo-divulgativo excepcionalmente autorizadas por la Administración competente en materia de medio ambiente y que discurran por las zonas señalizadas.",
  "El establecimiento de campamentos de turismo."
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

const BahiaCadizRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Bahía de Cádiz </h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default BahiaCadizRestrictions;