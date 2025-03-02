const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierras de Hornachuelos.",
  "Todas aquellas actividades organizadas por empresas y no comprendidas en el Decreto 20/2002, de 29 de enero, requerirán autorización previa de la Consejería competente en materia de medio ambiente.",
  "Las Consejerías competentes en materia de medio ambiente y turismo podrán regular mediante Orden Conjunta, las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o de ecoturismo.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const forbiddenActivities = [
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de motos de trial/enduro, cuatriciclos o vehículos asimilados, excepto si circulan por carreteras o caminos asfaltados.",
  "El descenso de barrancos en bote en Zona A.",
  "La acampada o la pernocta (pasar la noche o dormir en el vehículo entre el ocaso y la salida del sol) de caravanas, autocaravanas y vehículos de características similares, fuera de los lugares expresamente habilitados a tal fin.",
  "El vivaqueo y la acampada nocturna."
];

const authorizationActivities = [
  "La observación de la fauna y la flora, del patrimonio geológico y la observación geoatmosférica, cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje, permanentes o no desmontables, para la observación de aves y, en cualquier caso, cuando se desarrolle en Zona A1.",
  "Las actividades de filmación, rodaje, grabación sonora y fotografía, cuando su práctica implique el uso de equipos auxiliares, tales como focos, pantallas reflectoras, generadores eléctricos u otros, así como la instalación de estructuras de camuflaje permanentes o no desmontables.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación de vehículos a motor por caminos de acceso restringido.",
  "Las actividades de uso público, turismo activo y ecoturismo que impliquen la circulación en grupo de 4 ó más vehículos a motor.",
  "El senderismo, la marcha nórdica, las actividades en bicicleta y las rutas ecuestres en los senderos que discurran por Zona A.",
  "La escalada clásica y deportiva.",
  "La apertura, reequipamiento o desequipamiento de vías de escalada.",
  "El descenso de barrancos.",
  "La navegación a remo, vela y a motor, motos acuáticas, el esquí acuático, piragüismo e hidropedales, cuando se realicen en Zona A.",
  "La espeleología.",
  "Las acampadas y campamentos para la realización de actividades de educación ambiental, que solo podrán realizarse en las zonas y condiciones que se establezcan mediante resolución de la persona titular de la Delegación Territorial de Huelva de la Consejería competente en materia de medio ambiente.",
  "La celebración de romerías y fiestas populares con menos de diez años de antigüedad y aquellas de más de diez años de antigüedad cuando se produzcan modificaciones de las condiciones establecidas en la última autorización otorgada.",
  "La celebración de pruebas o eventos deportivos y las concentraciones y actividades recreativas, tal como las define el Decreto 195/2007, de 26 de junio, por el que se establecen las condiciones generales para la celebración de espectáculos públicos y actividades recreativas de carácter ocasional y extraordinario."
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

const SierraHornachuelosRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del Parque Natural de Sierra de Hornachuelos</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};


  export default SierraHornachuelosRestrictions;