const generalRules = [
  "Excepcionalmente la Consejería competente en materia de medio ambiente, mediante Resolución de la persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente, podrá autorizar eventos deportivos, turísticos o culturales relacionados con las actividades citadas en dicho apartado.",
  "La persona titular de la Consejería competente en materia de medio ambiente podrá, mediante Orden: a) En relación con las actividades relacionadas en apartados anteriores, modificar el régimen de intervención y las limitaciones establecidos para el desarrollo de las mismas. b) En relación con el desarrollo de cualquier otra actividad distinta a las relacionadas en los apartados anteriores, previa valoración de la incidencia del desarrollo de la actividad en la conservación de los valores naturales que motivaron la declaración del Parque Natural, determinar, si procede, el régimen de intervención administrativa al que la actividad queda sujeta.",
  "La persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente podrá, mediante Resolución, limitar el acceso y uso de los equipamientos básicos o el acceso a cualquier camino, establecer cupos o límites de fechas y horarios para el desarrollo de cualquier actividad, por diversas causas como sobrecarga del entorno, fenómenos naturales, riesgos o mantenimiento."
];

const rulesByMethod = {
  motor: [
    "Circulación de vehículos a motor por caminos de acceso restringido.",
    "Circulación en grupo de 4 o más vehículos a motor.",
    "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motos de trial/enduro, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados."
  ],
  bike: [
    "No hay restricciones específicas."
  ],
  hike: [
    "La escalada clásica y deportiva fuera de fechas/lugares habilitados.",
    "La apertura, reequipamiento o desequipamiento de vías de escalada.",
    "La espeleología."
  ]
};

const additionalRules = [
  "El acceso a las islas de los embalses de Aracena y Zufre.",
  "El descenso de barrancos en bote y el barranquismo en Zona A.",
  "La acampada o la pernocta (pasar la noche o dormir en el vehículo entre el ocaso y la salida del sol) de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
  "La observación de la fauna y la flora, del patrimonio geológico y la observación geoatmosférica cuando implique equipos auxiliares (focos, generadores, pantallas reflectoras, estructuras de camuflaje, etc.).",
  "Las actividades de filmación, rodaje, grabación sonora y fotografía con equipos auxiliares.",
  "Las acampadas o campamentos educativos (bajo condiciones específicas).",
  "El vivaqueo/acampada nocturna para grupos >15 personas o >3 tiendas.",
  "Celebración de romerías y fiestas populares recientes (<10 años) o con modificaciones.",
  "Celebración de eventos deportivos, recreativos o concentraciones extraordinarias."
];

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

const AracenaRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural de Sierra de Aracena y Picos de Aroche</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default AracenaRestrictions;
