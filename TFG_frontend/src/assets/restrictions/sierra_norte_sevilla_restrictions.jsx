const generalRules = [
  "Excepcionalmente la Consejería competente en materia de medio ambiente, mediante Resolución de la persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente, podrá autorizar eventos deportivos, turísticos o culturales relacionados con las actividades citadas en dicho apartado.",
  "La persona titular de la Consejería competente en materia de medio ambiente podrá, mediante Orden: a) En relación con las actividades relacionadas en apartados anteriores, modificar el régimen de intervención y las limitaciones establecidos para el desarrollo de las mismas. b) En relación con el desarrollo de cualquier otra actividad distinta a las relacionadas en los apartados anteriores, previa valoración de la incidencia del desarrollo de la actividad en la conservación de los valores naturales que motivaron la declaración del Parque Natural, determinar, si procede, el régimen de intervención administrativa al que la actividad queda sujeta.",
  "La persona titular de la Delegación Territorial de Sevilla de la Consejería competente en materia de medio ambiente podrá, mediante Resolución, limitar el acceso y uso de los equipamientos básicos o el acceso a cualquier camino, establecer cupos o limitas fechar y horarios para el desarrollo de cualquier actividad, por alguna de las siguientes causas: a) Cuando la presión de la demanda sobrepase la capacidad de acogida de los equipamientos o comprometa la calidad y seguridad de la visita. b) Por fenómenos naturales imprevistos o para evitar los riesgos de incendio durante los períodos de sequía. c) Por cualquier otra circunstancia que pudiera poner en peligro hábitats o recursos objeto de la política de conservación del espacio natural protegido o de las especies de la flora y la fauna silvestres, o inferir riesgos para las personas visitantes. d) Por obras de reforma o trabajos de mantenimiento de equipamientos de uso público, siempre que estos sean de su titularidad."
];

const rulesByMethod = {
  motor: [
    "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motos de trial/enduro, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
    "La acampada o la pernocta (pasar la noche o dormir en el vehículo entre el ocaso y la salida del sol) de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
    "La observación de la fauna y la flora, del patrimonio geológico y la observación geoatmosférica cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje, permanentes o no desmontables, para la observación de aves.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje permanentes o no desmontables.",
    "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de vehículos a motor por caminos de acceso restringido (requiere autorización).",
    "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación en grupo de 4 ó más vehículos a motor (requiere autorización).",
  ],
  bike: [

  ],
  hike: [
    "La observación de la fauna y la flora, del patrimonio geológico y la observación geoatmosférica cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje, permanentes o no desmontables, para la observación de aves.",
    "Las actividades de filmación, rodaje, grabación sonora y fotografía cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje permanentes o no desmontables.",  
    "La espeleología (requiere autorización)",

  ],
};

const additionalRules = [
  "Las acampadas y campamentos para la realización de actividades de educación ambiental, que solo podrán realizarse en las zonas y condiciones que se establezcan mediante resolución de la persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente.",
  "El vivaqueo y la acampada nocturna vinculados a actividades de educación ambiental para grupos superiores a 15 personas o que utilicen más de 3 tiendas de campaña.",
  "La celebración de romerías y fiestas populares con menos de diez años de antigüedad y aquellas de más de diez años de antigüedad cuando se produzcan modificaciones de las condiciones establecidas en la última autorización otorgada.",
  "La celebración de pruebas o eventos deportivos y las concentraciones y actividades recreativas, tal como las define el Decreto 195/2007, de 26 de junio, por el que se establecen las condiciones generales para la celebración de espectáculos públicos y actividades recreativas de carácter ocasional y extraordinario.",
  "La escalada clásica y deportiva (requiere autorización)",
  "La apertura de nuevas vías de escalada (requiere autorización)",
  "El descenso de barrancos en el Barranco de Risco Blanco (requiere autorización)",
  


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

const SierraMorenaSevillaRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Sierra Morena de Sevilla </h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && <Sections title="Normas Generales" items={generalRules} />}
        <Sections title="Prohibiciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraMorenaSevillaRestrictions;