const generalRules = [
  "El desarrollo de actividades de turismo en el medio rural, de turismo activo y de ecoturismo por parte de empresas se regirá por la normativa vigente, en particular por lo establecido en el Decreto 20/2002, de 29 de enero, y en la Orden de 20 de marzo de 2003, conjunta de las Consejerías de Turismo y Deporte y de Medio Ambiente, y las disposiciones establecidas en el Plan de Ordenación de los Recursos Naturales y en el Plan Rector de Uso y Gestión del Parque Natural Sierra de Castril.",
  "La Consejería de Turismo, Comercio y Deporte y de Medio Ambiente podrán regular mediante Orden conjunta las obligaciones y condiciones medioambientales para la práctica de aquellas actividades que en el futuro sean declaradas como actividades de turismo activo o ecoturismo.",
  "La práctica y el desarrollo de las actividades de uso público y educación ambiental se realizará asegurando la conservación del patrimonio natural y cultural."
];

const forbiddenActivities = [
  "La circulación de vehículos terrestres a motor por caminos rurales de anchura inferior a 2 metros, ni por servidumbres de los dominios públicos hidráulicos, cortafuegos y fajas auxiliares, vías forestales de extracción de madera y cauces secos e inundados.",
  "La circulación campo a través o fuera de los caminos permitidos de bicicleta y vehículos a motor.",
  "Las actividades recreativas, o relacionadas con ellas, que empleen helicópteros ultraligeros, aviones, avionetas y cualquier vehículo aéreo con motor",
  "El paracaidismo.",
  "La navegación de embarcaciones a motor por cursos o masas de agua, salvo para finalidades de interés público debidamente autorizadas.",
  "El descenso de cursos de agua en cualquier tipo de embarcación o artefacto flotante.",
  "La circulación de quads vinculada a actividades de uso público o turismo activo."
];

const authorizationActivities = [
  "Cualquier actividad que se realice en las Zonas de Reserva (A).",
  "Escalada, del 1 de diciembre al 31 de agosto, en zonas donde se produzca nidificación y cría de aves rapaces.",
  "La apertura de nuevas vías o escuelas de escalada en paredes y el equipamiento o el desequipamiento de las existentes.",
  "El vivaqueo, entendiendo por tal la actividad de pasar la noche al aire libre utilizando el material específico para ello (saco de dormir, funda de vivac o tiendas de cmapaña de pequeño tamaño).",
  "Las actividades aeronáuticas siguientes: parapente, ala delta, vuelo sin motor y globo aerostático.",
  "El establecimento de áreas de despegue o aterrizaje, así como la señalización de las mismas, para actividades aeronáuticas sin motor.",
  "El barranquismo.",
  "La espeología",
  "La navegación de embarcaciones sin motor por los embalses y lagunas.",
  "Caravanas organizadas de 4 o más vehículos a motor",
  "Cualquier actividad permitida que se realice fuera de los equipamientos básicos y complementarios que requiera la instalación de dotaciones, incluso cuando éstas sean provisionales",
  "La realización de cualquier tipo de competición deportiva, prueba o exhibición organizada.",
  "Acampadas o campamentos juveniles de los comtemplados en el Decreto 45/2000.",
  "La instalación de infraestructuras y equipamientos permanentes para el uso público, el turismo o la educación ambiental.",
  "Aquellas romerías o concentraciones de carácter popular que hayan comenzado a tener lugar durante los últimos 10 años o se vayan a iniciar en el futuro."
];

const prugActivities = [
  
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


const SierraCastrilRestrictions = () => {
  return (
    <div className="container mt-4 border border-warning p-4">
      <h3 className="mb-4">Restricciones del Parque Natural de Sierra de Castril</h3>
      <Sections title="Normas Generales" items={generalRules} />
      <Sections title="Actividades no permitidas" items={forbiddenActivities} />
      <Sections title="Actividades sujetas a la obtención de autorización" items={authorizationActivities} />
      <Sections title="PRUG:" items={prugActivities} />
    </div>
  );
};

export default SierraCastrilRestrictions;