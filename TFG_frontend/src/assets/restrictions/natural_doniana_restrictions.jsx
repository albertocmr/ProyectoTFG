const generalRules = [
  "Las presentes normas generales serán de aplicación al conjunto del Espacio Natural de Doñana, incluyendo tanto el Parque Nacional y sus Zonas de Protección, como el Parque Natural. Todo ello sin perjuicio de lo dispuesto para cada una de las zonas identificadas en sus respectivas normativas particulares.",
  "Durante su vigencia, el contenido del Plan podrá ser sometido a modificación de alguna o algunas de las partes que lo constituyen, o a un procedimiento de revisión del conjunto del mismo.",
  " Las normas del presente Plan son determinaciones de aplicación directa, vinculantes para las Administraciones Públicas y para los particulares.",
];

const rulesByMethod = {
  motor: [
    "La Consejería de Medio Ambiente podrá limitar o restringir a los visitantes en general o a cierto tipo de medios de transporte, de forma eventual o permanente, el acceso por cualquier camino público cuando exista causa justificada por impacto ambiental, incompatibilidad de uso con la gestión de la conservación, con los trabajos forestales o de aprovechamiento de los recursos, y por motivos de riesgo a las personas.",
    "En caminos de tierra, la velocidad máxima será de 40 km/h salvo indicación expresa que establezca un límite diferente.",
    "Los vehículos no podrán salirse de los caminos, excepto en los lugares previstos para ello.",
    "No se producirán ruidos o sonidos estridentes que puedan perturbar la fauna.",
    "No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.",
    "No se interceptará la trayectoria de movimiento de los grupos de animales.",
    "No se circulará a más de 20 km/h en las inmediaciones de los animales.",
    "No se utilizará iluminación artificial alguna.",
    "No se utilizará ningún sistema de atracción, captura o repulsión de animales.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
    "El estacionamiento para pernoctar de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin",
  ],
  bike: [
    "La Consejería de Medio Ambiente podrá limitar o restringir a los visitantes en general o a cierto tipo de medios de transporte, de forma eventual o permanente, el acceso por cualquier camino público cuando exista causa justificada por impacto ambiental, incompatibilidad de uso con la gestión de la conservación, con los trabajos forestales o de aprovechamiento de los recursos, y por motivos de riesgo a las personas.",
    "El cicloturismo campo a través y en senderos de uso exclusivamente peatonal.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
  ],
  hike: [
    "La Consejería de Medio Ambiente podrá limitar o restringir a los visitantes en general o a cierto tipo de medios de transporte, de forma eventual o permanente, el acceso por cualquier camino público cuando exista causa justificada por impacto ambiental, incompatibilidad de uso con la gestión de la conservación, con los trabajos forestales o de aprovechamiento de los recursos, y por motivos de riesgo a las personas.",
    "Las rutas ecuestres en senderos de uso público exclusivamente peatonales.",
    "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
  ]
};

const additionalRules = [
  "El paracaidismo y el vuelo con ultraligero y en general las actividades recreativas que empleen aeronaves con motor. ",
  "La acampada y pernocta al aire libre, a excepción de lo dispuesto en las normas generales referidas a actividades rocieras y romerías y en materia de actividades de investigación.",
]

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

const DonianaRestrictions = ({ selectedMethod }) => {
  const methodKey = String(selectedMethod) === "1"
    ? "motor"
    : String(selectedMethod) === "2"
    ? "bike"
    : String(selectedMethod) === "3"
    ? "hike"
    : "all";

  const methodNames = {
    motor: "Vehículo a motor",
    bike: "Bicicleta",
    hike: "Senderismo",
    all: "Todas las restricciones (vehículos a motor, ciclismo y senderismo)",
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
      <div className='card-container'>
        <h3 className="mb-4">Restricciones del Parque Natural de Doñana</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas generales." items={generalRules} />
        )}
        <Sections title="Prohibiciones en el parque natural." items={combinedRules} />
      </div>
    </div>
  );
};

export default DonianaRestrictions;
