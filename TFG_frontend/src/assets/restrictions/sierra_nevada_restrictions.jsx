import React from 'react';

const generalRules = [
  "Las presentes normas generales serán de aplicación al Parque Nacional y sus zonas de reserva (A), regulación especial (B) y regulación común (C), sin perjuicio de lo dispuesto en su normativa particular.",
  "La modificación del Plan supone cambios concretos en alguno o algunos de sus contenidos, tratándose de ajustes puntuales que no alteran sustancialmente la gestión del espacio.",
  "Las limitaciones se establecerán mediante resolución del Director del Parque Nacional y podrán modificarse si afectan a la conservación del entorno.",
];

const rulesByMethod = {
  motor: [
    "La circulación de vehículos a motor fuera de las vías autorizadas. Límite de velocidad: 40 km/h, salvo señalización específica.",
    "No está permitida la circulación de motocicletas, automóviles y demás vehículos a motor campo a través, por cortafuegos, vías forestales de extracción de madera, vías pecuarias, cauces secos o inundados.",
    "La circulación de vehículos a motor está permitida solo en caminos habilitados.",
    "El estacionamiento de caravanas fuera de áreas habilitadas.",
    "Restricción de entrada para perros y otros animales de compañía.",
    "Actividades con megafonía que alteren el silencio natural.",
  ],
  bike: [
    "Cicloturismo. (requiere de autorización)",
    "El cicloturismo en senderos exclusivamente peatonales.",
    "Las rutas ecuestres en senderos peatonales.",
    "Actividades con megafonía que alteren el silencio natural.",
  ],
  hike: [
    "Las actividades con megafonía que alteren el silencio natural.",
    "El estacionamiento de caravanas fuera de áreas habilitadas.",
    "Las rutas ecuestres. (requiere autorización)",
    "Restricción de entrada para perros y otros animales de compañía.",
    "Actividades con megafonía que alteren el silencio natural.",
    "Actividades de filmación y fotografía. (requiere autorización)",
    "Travesía de montaña y senderismo. (requiere autorización)",
    "Restricción de entrada para perros y otros animales de compañía.",
  ]
};


const additionalRules = [

]

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

const SierraNevadaRestrictions = ({ selectedMethod }) => {
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
    ]))
    : rulesByMethod[methodKey] || [];

  return (
    <div className="container shadow p-3">
      <div className="card-container">
        <h3 className="mb-4">Restricciones del Parque Natural Sierra Nevada.</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas Generales" items={generalRules} />
        )}
        <Sections title="Prohibiciones en el parque natural" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraNevadaRestrictions;
