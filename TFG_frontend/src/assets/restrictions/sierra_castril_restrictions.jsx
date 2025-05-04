import React from 'react';

const rulesByMethod = {
  motor: [
    "Queda prohibida la actividad en zonas de reserva (A).",
    "En caminos de tierra, la velocidad máxima será de 40 km/h, salvo indicación expresa que establezca un límite diferente.",
    "La circulación campo a través o fuera de los caminos permitidos de vehículos a motor.",
    "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos e inundados.",
    "No se producirán ruidos o sonidos que puedan perturbar a la fauna.",
    "No se arrojarán alimentos ni se realizarán cebados en lugares de tránsito habitual de animales.",
    "No se interceptará la trayectoria de movimiento de los grupos de animales.",
    "No se circulará a más de 20 km/h en las inmediaciones de los animales.",
    "No se utilizará iluminación artificial alguna.",
    "No se utilizarán sistemas de atracción, captura o repulsión de animales.",
    "La circulación de quads vinculada a actividades de uso público o turismo activo.",
    "Caravanas organizadas de 4 o más vehículos a motor (requieren autorización)."
  ],
  bike: [
    "Queda prohibida la actividad en zonas de reserva (A).",
    "La circulación campo a través o fuera de los caminos permitidos de bicicleta."
  ],
  hike: [
    "Queda prohibida la actividad en zonas de reserva (A).",
    "Con carácter general, el acceso y tránsito de visitantes será libre por los viales de la red pública de caminos, exceptuando los que presenten señalización que indique expresamente una restricción o limitación al paso.",
    "Descenso de ríos en cualquier tipo de embarcación o artefacto flotante.",
    "Apertura o equipamiento de vías de escalada.",
    "Navegación sin motor en lagunas o embalses.",
    "Escalada en aquellas zonas en donde se puedan producir interferencias o affeciones a la fauna o a la flora.",
    "El vivaqueo o el uso de tiendas de campaña pequeñas (requiere autorización).",
    "Acampadas o campamentos juveniles (requieren autorización).",
    "El barranquismo (requiere autorización).",
    "Espeleología (requiere autorización).",
    "La escalada en zonas con nidificación de aves entre diciembre y agosto (requiere autorización).",
    "Navegación con embarcaciones a motor (excepto con autorización pública).",
  ]
};

const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente.",
  "Las Consejerías competentes podrán regular mediante Orden las condiciones para estas actividades.",
  "Toda actividad debe asegurar la conservación del patrimonio natural y cultural."
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

const SierraCastrilRestrictions = ({ selectedMethod }) => {
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
        <h3 className="mb-4">Restricciones del Parque Natural Sierra de Castril</h3>
        <h4>Método seleccionado: {methodNames[methodKey]}</h4>
        {methodKey === "all" && (
          <Sections title="Normas Generales" items={generalRules} />
        )}
        <Sections title="Restricciones específicas" items={combinedRules} />
      </div>
    </div>
  );
};

export default SierraCastrilRestrictions;
