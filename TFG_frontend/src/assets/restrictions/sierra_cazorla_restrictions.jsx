const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierras de Cazorla, Segura y Las Villas.",
  "La Consejería de Turismo, Comercio y Deporte y de Medio Ambiente podrán regular mediante Orden conjunta las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o ecoturismo.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const forbiddenActivities = [
  "El cicloturismo campo a través y en los senderos que el Programa Sectorial de Uso Público establezca de uso exclusivamente peatonal.",
  "La heliexcursión, el paracaidismo y el vuelo con ultraligero y en general las actividades recreativas que empleen aeronaves con motor.",
  "Las rutas ecuestres en los senderos que el Programa Sectorial de Uso Público establezca de uso exclusivamente peatonal.",
  "La circulación de vehículos a motor campo a través, en cortafuegos y fajas auxiliares, en vías forestales de extracción de madera, en cauces secos o inundados, en servidumbres del dominio público hidráulico, caminos de anchura inferior a 2 metros y en senderos, salvo en aquellos tramos de los mismos en los que el uso de vehículos a motor esté expresamente permitido por la persona titular de la Delegación Territorial de Jaén de la Consejería competente en materia de medio ambiente.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motocicletas, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
  "Las actividades que impliquen el uso de aparatos de megafonía exterior con alteración de las condiciones de sosiego y silencio.",
  "El estacionamiento para pernoctar de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
  "La navegación con motor de explosión."
];

const authorizationActivities = [
  "FALTA RELLENAR ACTIVIDADES CON AUTH SIERRA CAZORLA"
];

const prugActivities = [
  "rellenar prug"
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


const SierraCazorlaRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del Parque Natural de Sierras de Cazorla, Segura y Las Villas</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};

  export default SierraCazorlaRestrictions;