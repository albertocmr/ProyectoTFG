const generalRules = [
  "Las presentes normas generales serán de aplicación al Parque Nacional y sus zonas de reserva (A), regulación especial (B) y regulación común (C), sin perjuicio de lo dispuesto en su normativa particular",
  "Cabe destacar que la persona titular de la Delegación Territorial de Cádiz de la Consejería competente en materia de medio ambiente, podrá, mediante Resolución limitar el acceso y uso de los equipamientos básicos o el acceso a cualquier camino o zona terrestre o marina, establecer cupos o limitas fechar y horarios para el desarrollo de cualquier actividad, por alguna de las siguientes causas.",
  "Excepcionalmente, la Consejería competente en materia de medio ambiente, mediante Resolución de la persona titular de la Delegación Territorial de Cádiz de la Consejería competente en materia de medio ambiente, podrá autorizar eventos deportivos, turísticos o culturales relacionados con las actividades citadas en dicho apartado.",
  "El Equipo de Gestión del Espacio Natural podrá autorizar excepciones para eventos turísticos o culturales relacionados con las actividades mencionadas."
];

const forbiddenActivities = [
  "Actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motos de trial/enduro, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
  "La realización de cualquier actividad de uso público, turismo activo o ecoturismo en Zona A2 fuera de los equipamientos que se habiliten para ello.",
  "La acampada y la pernocta (aparcar entre el ocaso y la salida del sol) de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
  "La realización de cualquier actividad de uso público, turismo activo o ecoturismo en Zona A1, salvo actividades vinculadas a la observación de la fauna y la flora, el patrimonio geológico y la observación geoatmosférica.",
  "La navegación recreativa a motor en Zona B2 salvo la asociada a la pesca recreativa y a rutas turísticas de carácter educativo-divulgativo excepcionalmente autorizadas por la Administración competente en materia de medio ambiente y que discurran por las zonas señalizadas.",
  "El establecimiento de campamentos de turismo."
];

const authorizationActivities = [
  "La observación de la fauna y la flora, del patrimonio geológico y la observación geoatmosférica, cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje, permanentes o no desmontables, para la observación de aves y, en cualquier caso, cuando se desarrolle en Zona A1.",
  "Rutas ecuestres.",
  "Actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de vehículos a motor por caminos de acceso restringido.",
  "Actividades de uso público, turismo activo y ecoturismo que impliquen la circulación en grupo de 4 ó más vehículos a motor.",
  "Travesía de montaña y senderismo.",
  "Observación de fauna y flora.",
  "Actividades de filmación y fotografía."
];

const prugActivities = [
  "Son libres las actividades de turismo activo y ecoturismo en espacios de uso público sin restricciones específicas.",
  "Las limitaciones se establecerán mediante resolución del Director del Parque Nacional y podrán modificarse si afectan la conservación del entorno."
];

const Section = ({ title, items }) => (
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


const BahiaCadizRestrictions = () => {
  return (
    <div className="container mt-4 border border-dark p-4">
      <h3 className="mb-4">Restricciones del parque natural de Bahía de Cádiz</h3>
      <Section title="Normas Generales" items={generalRules} />
      <Section title="Actividades no permitidas" items={forbiddenActivities} />
      <Section title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Section title="PRUG:" items={prugActivities} />
    </div>
  );
  };
  
  export default BahiaCadizRestrictions;