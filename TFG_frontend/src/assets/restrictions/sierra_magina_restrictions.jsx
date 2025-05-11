const generalRules = [
  "El desarrollo de las actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y Medio Ambiente y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión.",
  "La Consejería de Medio Ambiente podrá regular mediante Orden conjunta con la Consejería de Turismo y Deporte las condiciones medioambientales para el desarrollo de nuevas actividades deportivas, de turismo activo o de ecoturismo que se declaren.",
  "La Consejería de Medio Ambiente podrá limitar, condicionar o someter a autorización, de forma cautelar e inmediata, por un tiempo determinado o de manera permanente, el desarrollo de cualquier tipo de actividad en un determinado lugar, cuando existan razones justificadas."
];

const rulesByMethod = {
  motor: [
    "En caminos de tierra, la velocidad máxima será de 40 km/h salvo indicación que establezca un límite diferente.",
    "Los vehículos no podrán salirse de los caminos, excepto en los lugares previstos para ello.",
    "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos o inundados.",
    "La circulación de vehículos campo a través.",
    "La distancia mínima a los animales será de 100 m.",
    "No se circulará a más de 20 km/h en las inmediaciones de los animales.",
    "No se producirán ruidos o sonidos estridentes que puedan perturbar la fauna.",
    "No se interceptará el movimiento de los animales observados.",
    "No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.",
    "No se utilizará iluminación artificial alguna.",
    "No se utilizará ningún sistema de atracción, captura o repulsión de animales.",
    "La circulación de quads vinculada a actividades de uso público.",
    "La circulación de vehículos a motor en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).",
    "Las caravanas con 4 o más vehículos."

  ],
  bike: [
    "Bicicleta de montaña en Zonas de reserva (A) y Zonas de distribución potencial de endemismos (B1).",
    "La distancia mínima a los animales será de 100 m.",
    "No se producirán ruidos o sonidos estridentes que puedan perturbar la fauna.",
    "No se interceptará el movimiento de los animales observados.",
    "No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.",
    "No se circulará a más de 20 km/h en las inmediaciones de los animales.",
    "No se utilizará iluminación artificial alguna.",
    "No se utilizará ningún sistema de atracción, captura o repulsión de animales.",
  ],
  hike: [
    "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
    "No se producirán ruidos o sonidos estridentes que puedan perturbar la fauna.",
    "No se interceptará el movimiento de los animales observados.",
    "No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.",
    "No se utilizará iluminación artificial alguna.",
    "No se utilizará ningún sistema de atracción, captura o repulsión de animales.",
  ],
};

const additionalRules = [
  "Actividades aeronáuticas: globo aerostático.",
  "La apertura de nuevas vías de escalada en paredes y el reequipamiento y el desequipamiento de las existentes.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "Escalada: en Zonas de reserva (A) y del 1 de diciembre al 31 de agosto, en zonas donde se produzca nidificación y cría de aves rapaces, periodo que podrá ser modificado si se realizan estudios posteriores que lo justifiquen.",
  "Vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para estos menesteres, como el saco de dormir o la funda de vivac.",
  "Turismo ecuestre en Zonas de Reserva (A) y Zonas de distribución potencial de endemismos (B1).",
  "Espeleología.",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Las acampadas o campamentos juveniles que se organicen de acuerdo con el Decreto 45/2000, de 31 de enero, sobre la organización de acampadas y campamentos juveniles de Andalucía.",
  "La apertura de nuevas vías de escalada en paredes y el reequipamiento y el desequipamiento de las existentes.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "La creación de campamentos de turismo.",
  "La puesta en valor de nuevos senderos peatonales y su señalización.",
  "Aquellas romerías o concentraciones de carácter popular que hayan iniciado su actividad durante los últimos 10 años o la vayan a iniciar en la actualidad."
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


const SierraMaginaRestrictions = ({ selectedMethod }) => {
  const methodKey = 
    selectedMethod === "1" ? "motor" : selectedMethod === "2" ? "bike" : selectedMethod === "3" ? "hike" : "all";

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
        <h3 className="mb-4">Restricciones del Parque Natural Sierra Mágina</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas Generales" items={generalRules} />
        )}
        <Sections title="Prohibiciones en el parque natural" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraMaginaRestrictions;
