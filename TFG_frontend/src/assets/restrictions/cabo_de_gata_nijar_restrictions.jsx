const generalRules = [
  "Las presentes normas generales serán de aplicación al Parque Nacional y sus zonas de reserva (A), regulación especial (B) y regulación común (C) del Parque Natural, sin perjuicio de lo dispuesto en su normativa particular.",
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, de Turismo en el Medio Rural y Turismo Activo y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, por la que se establecen las obligaciones y condiciones medioambientales para la práctica de las actividades integrantes del turismo activo, y las disposiciones establecidas en el presente Plan y en el Plan Rector de Uso y Gestión.",
  "Todas aquellas actividades organizadas por empresas y no comprendidas en el Decreto 20/2002, de 29 de enero, requerirán autorización previa de la Consejería competente en materia de medio ambiente.",
  "El acceso de visitantes podrá ser regulado por la Consejería competente en materia de medio ambiente en los sectores y épocas que considere oportunos, para la adecuada preservación de los recursos naturales y sin perjuicio de las competencias que legalmente correspondan a los municipios.",
  "Las Consejerías competentes en materia de turismo y medio ambiente podrán regular mediante Orden conjunta, las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o de ecoturismo.",
  "El Equipo de Gestión del Espacio Natural podrá autorizar excepciones para eventos turísticos o culturales relacionados con las actividades mencionadas."
];

const forbiddenActivities = [
  "La circulación de vehículos por caminos y pistas forestales a velocidades superiores a 40 km/h, salvo indicación expresa que indique un límite diferente.",
  "El globo aerostático en Zonas de Reserva y el paracaidismo en todo el Parque Natural.",
  "La circulación “campo a través” o fuera de los caminos permitidos, con bicicletas, vehículos a motor y en equino.",
  "La celebración de pruebas deportivas de vehículos terrestres a motor en cualquier camino del Parque Natural, excepto en las carreteras comarcales.",
  "La actividad motonáutica, salvo en las playas urbanas en las zonas balizadas a tal efecto.",
  "La acampada y el aparcamiento permanente o temporal fuera de los campamentos de turismo y áreas de acampada, entre el ocaso entre el ocaso y la salida del sol, de vehículos habilitados como viviendas, y la construcción de habitáculos con cualquier tipo de materiales.",
  "Las actividades relacionadas con actividades recreativas que empleen helicópteros, ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor.",
  "La circulación de quads en actividades vinculadas al uso público."
];

const authorizationActivities = [
  "Cualquier actividad permitida que se realice fuera de la red de senderos y equipamientos que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales.",
  "Los establecimientos de restauración no permanentes al igual que todo tipo de quiosco o puesto de venta.",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "El tránsito, para la realización de actividades de educación ambiental, por caminos de acceso restringido por motivos de conservación.",
  "Las actividades aeronáuticas siguientes: parapente, ala delta, paramotor y globo aerostático, este último estará prohibido en Zonas de Reserva, Zonas A.",
  "El establecimiento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "La práctica del buceo con equipo autónomo, en aquellos lugares designados para dicha actividad (Zonas B5).",
  "La puesta en valor de nuevos senderos peatonales y su señalización.",
  "Las instalaciones relacionadas con los deportes náuticos, ya sean fijas o temporales.",
  "La creación de campamentos de turismo y áreas de acampada."
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


const CaboDeGataRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del parque natural de Cabo de Gata-Níjar</h3>
      <Section title="Normas Generales" items={generalRules} />
      <Section title="Actividades no permitidas" items={forbiddenActivities} />
      <Section title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Section title="PRUG:" items={prugActivities} />
    </div>
  );
};

export default CaboDeGataRestrictions;