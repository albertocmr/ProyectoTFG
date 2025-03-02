const generalRules = [
  "Las presentes normas generales serán de aplicación al Parque Nacional y sus zonas de reserva (A), regulación especial (B) y regulación común (C), sin perjuicio de lo dispuesto en su normativa particular.",
];

const forbiddenActivities = [
  "La circulación de vehículos a motor fuera de las vías autorizadas. Límite de velocidad: 40 km/h, salvo señalización específica.",
  "El cicloturismo en senderos exclusivamente peatonales.",
  "Las rutas ecuestres en senderos peatonales.",
  "Actividades con megafonía que alteren el silencio natural.",
  "El estacionamiento de caravanas fuera de áreas habilitadas.",
];

const additionalRestrictions = [
  "Circulación de vehículos solo en caminos habilitados.",
  "Restricción de entrada para perros y otros animales de compañía.",
];

const authorizationActivities = [
  "Cicloturismo.",
  "Rutas ecuestres.",
  "Circulación con vehículos a motor.",
  "Travesía de montaña y senderismo.",
  "Observación de fauna y flora.",
  "Actividades de filmación y fotografía.",
];

const prugActivities = [
  "Son libres las actividades de turismo activo y ecoturismo en espacios de uso público sin restricciones específicas.",
  "Las limitaciones se establecerán mediante resolución del Director del Parque Nacional y podrán modificarse si afectan a la conservación del entorno.",
  "El Equipo de Gestión del Espacio Natural podrá autorizar excepciones para eventos turísticos o culturales relacionados con las actividades mencionadas."
];

const Sections = ({ title, items }) => (
  <section className="mb-4 mt-4 border border-dark p-2">
    <h4 className="ms-4">{title}</h4>
    <ul className="list-group mb-4 border border-dark">
      {items.map((item, index) => (
        <li key={index} className={`list-group-item ${index % 2 === 0 ? "list-group-item-dark" : ""}`}>
          {item}
        </li>
      ))}
    </ul>
  </section>
);


const SierraNevadaRestrictions = () => {
  return (
    <div className="container mt-4 border border-dark p-4">
      <h3 className="mb-4">Restricciones del parque natural de Sierra Nevada</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a autorización" items={authorizationActivities} />
      <Sections title="Restricciones adicionales del Parque Nacional" items={additionalRestrictions} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};

export default SierraNevadaRestrictions;
